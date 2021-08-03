const mongoose = require("mongoose");
const Tour = require("./tour.models");

/**
 * 建模: 评论数据模型( 父引用, 面对巨量数据 - 完成笔记 )
 *      a) 评论数据结构:
 *          0. 评论内容
 *          1. 评分
 *          2. 评论创建时间
 *          3. 旅游id - 评论主题
 *          4. 用户id - 评论者
 *      b) 注意: 允许虚拟属性输出, 方便做一些非持久性数据填充逻辑
 *          0. 非持久: 不存储在数据库中的逻辑加工
 */

const reviewSchema = mongoose.Schema({
    review: {
        type: String,
        require: [true, "must enter review!"],
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    createAt: {
        type: Date,
        default: Date.now(), // 默认为当前服务器时间
    },
    /**
     * mongoose.Schema.ObjectId( 完成笔记 )
     *      a) 目的: mongoose快速的获取用户id游戏规则, 为以后的数据填充做铺垫
     *      b) 解析:
     *          0. type: mongoose.Schema.ObjectId, mongoose快速的获取用户id游戏规则
     *          1. ref: 'xxx', mongoose指定查询文档名称( 截图 )
     */
    tourId: {
        type: mongoose.Schema.ObjectId,
        ref: "tours",
        require: [true, "must enter tour!"],
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        require: [true, "must enter user!"],
    },

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

/**
 * 实例索引: 限制用户评论，一个tour用户只能评论一次( 等待笔记 )
 * 配置复合索引: userId+tourId保持唯一 ( 等待笔记 )
 *      a) 注意: 因为远程服务器的问题, 此代码可能要间隔非常长的时间来生效, 有可能是一天以后....
 */
reviewSchema.index({ tourId: 1, userId: 1 }, { unique: true });


/**
 * populate多字段, 填充数据中间件写法 ( 完成笔记 )
 *      a) 注意: select的用法，在笔记中有详细的介绍
 *      b) 注意: 对比填充数据前后截图( 截图 )
 */
reviewSchema.pre(/^find/, function (next) {
    // 多字段填充
    // this.populate({
    //     path: "tourId",
    //     select: "name",
    // }).populate({
    //     path: "userId",
    //     select: "name photo",
    // });

    this.populate({
        path: "userId",
        select: "name photo",
    });

    next();
});

/**
 * 静态方法实例: 计算指定tour评论的"平均评分"以及"评论数量"( 等待笔记 )
 *      0. 目的: 提交对应数据时，就进行相应统计计算，从而避免多余的查询统计计算 ( 静态方法应用的思路核心 )
 *          a) 防止: 避免重复查询计算，节约计算资源
 *          b) 意思: 在提交新的评论时, 就计算好并存储，需要时直接读取，无需每次查询都重复计算
 *          c) 应用场景: 评分，评论数量, 等...
 *      1. 实例总结:
 *          a) 目的: 在创建/删除/跟新评论时，计算评价数量，以及评价平均分
 *          b) 在model下创建，静态逻辑
 *          c) 将静态逻辑应用至，post中间件中, 在this.controller下执行
 *              0. 使用post中间件原因: 是pre在新的评论未保存时进行的计算, post是在新的评论保存在数据库后进行计算
 */
reviewSchema.statics.handleCpuAverageRating = async function (tourId) {
    const stats = await this.aggregate([
        // 过滤为指定tourId的review数据
        {
            $match: { tourId: tourId },
        },
        // 通过数据分析计算: rating字段的平均值
        {
            $group: {
                _id: "$tourId",
                nRating: { $sum: 1 },
                avgRating: { $avg: "$rating" },
            },
        },
    ]);
    // 存储计算结果
    await Tour.findByIdAndUpdate(tourId, {
        ratingsAverage: stats[0].avgRating, // 平均数
        ratingsQuantity: stats[0].nRating, // 总数
    });
};

/**
 * 应用静态方法实例: 创建评论时计算"平均评分"以及"评论数量" ( 等待笔记 )
 *      a) 注意: 使用post中间件原因: 是pre在新的评论未保存时进行的计算, post是在新的评论保存在数据库后进行计算
 *      b) 细节: post中间件无需next
 *      c) 获取当前加工的数据的原因: this.字段名
 *          0. 原因: XXXModel.create(reqBody)在底层class有传递
 */
reviewSchema.post("save", function () {
    console.log(`this.userId--------save`, this.userId);
    this.constructor.handleCpuAverageRating(this.tourId);
});

/**
 * 应用静态方法实例: 删除/更新评论时计算"平均评分"以及"评论数量" ( 等待笔记 )
 *      a) 构建: 预中间件
 *          0. 原因: findByIdAndXXX在底层class无传递性, post类型中间件, 拿不到所需加工的数据, 故要借助class属性传递
 *          1. 针对findByIdAndXXX中间件写法原因: findByIdAndXXX此类型函数底层是findOneAndXXXX, 故中间件需要此依靠来拦截加工
 *          2. this.findOne: 获取当前加工的数据
 *      b) 应用: 计算逻辑
 *          0. 注意: 计算逻辑没有传递给post类型中间件，故依然依靠pre中间件的constructor执行静态方法
 *              a) this.xxx.constructor.handlexxxx();
 */
// 构建: 预中间件
reviewSchema.pre(/^findOneAnd/, async function (next) {
    this.review = await this.findOne();
    next();
});

// 应用: 计算逻辑
reviewSchema.post(/^findOneAnd/, async function () {
    await this.review.constructor.handleCpuAverageRating(this.review.tourId);
});

const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;
