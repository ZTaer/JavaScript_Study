const mongoose = require("mongoose");

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

const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;
