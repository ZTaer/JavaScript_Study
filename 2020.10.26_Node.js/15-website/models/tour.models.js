const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");
const User = require("./user.models");

/**
 * Mongoose.Schema: 强大的数据效验功能 | 临时总结  ( 完成笔记 )
 *      a) new mongoose.Schema({ ...xxx }): 构建Schema
 *      b) {}属性功能:
 *          0. type: 指定数据类型
 *              a) String: 字符串类型
 *              b) Number: 数字类型
 *              c) Bollen: 布尔类型
 *              d) Date: 时间类型
 *              e) [xxx]: xxx Array类型
 *                  0. [Date]: 时间Array类型
 *                  1. [String]: 字符串Array类型
 *          1. required: 是否必填
 *              a) 报错提示写法: [ true, '报错信息' ]
 *          2. unique: 是否唯一
 *              a) 意思: 当前属性，不可重复出现在数据库中
 *          3. trim: 清除字符串，二端空格
 *          4. default: 默认值
 *          5. select: 永远限制不展示字段: 在Mongoose.Schema设定select: false无论任何情况都将不输出此字段数据
 *          6. maxLength | minLength : 字符串最大最小长度效验
 *          7. min | max : 效验数字，最大，最小值
 *          8. enum枚举值: 仅允许存储指定字符串
 *              a) 注意: 仅支持String类型，不支持Number类型
 *              b) 使用规范: { values: ["xxx","yyy"], message: "错误信息" }
 *      c) 注意: 部分跟新数据函数要增加一下入参, 才能开启效验功能
 *          例如: Model.prototype.findByIdAndUpdate
 *          {
 *              new: true, // new属性: 代表确定要更新数据
 *              runValidators: true, // runValidators属性: 开启mongoose.schema数据效验, false则相反
 *          }
 */

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required!"],
        unique: true,
        trim: true,
        maxlength: [30, "长度不能超过30"],
        minlength: [5, "长度不能小于5"],
        /**
         * 构建: 自定义效验器, 配合第三方库validator( 完成笔记 )
         *      a) 第三方效验库( 已内置mongoose ): https://github.com/validatorjs/validator.js
         *          0. 安装: yarn add validator
         *          1. 注意: 虽然已经内置validator, 但依然要安装才能使用
         *      b) validators效验功能:
         *          0. validator.isAlpha - "只允许包含字母, 空格都不允许"
         *      b) validators使用方法如下:
         */
        validate: [validator.isAlpha, "只允许包含字母, 空格都不允许"],
    },
    duration: {
        type: Number,
        required: [true, "duration is required!"],
    },
    maxGroupSize: {
        type: Number,
        required: [true, "maxGroupSize is required!"],
    },
    difficulty: {
        type: String,
        required: [true, "difficulty is required!"],
        enum: {
            values: ["easy", "medium", "difficult"],
            message: "仅限使用,easy,medium,difficult",
        },
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, "大于1"],
        max: [5, "小于5"],
        /**
         * MongoDB.Schema: set回调加工数据 ( 完成笔记 )
         * 实例: MongoDB.Schema设定评分四舍五入保留一位数
         *      a) Math.round(): ES5四舍五入官方默认方法
         */
        set: (value) => (Math.round(value * 10) / 10),
    },
    ratingsQuantity: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 5,
    },
    priceDiscount: {
        type: Number,
        /**
         * 构建: 自定义效验器( 完成笔记 )
         *      a) 注意:
         *          0. 效验函数只能返回true/false, true代表效验通过，false代表效验失败
         *          1. this.xxx读取相应字段入参，只能在mongoose.schema淫威下使用
         *      b) {VALUE}: 能抓取到，对应的入参
         *      c) 第三方效验库( 已内置mongoose ): https://github.com/validatorjs/validator.js
         *          0. 安装: yarn add validator
         *          1. 注意: 虽然已经内置validator, 但依然要安装才能使用
         */
        validate: {
            validator: function (value) {
                return value < this.price;
            },
            message: "折扣价格必须: {VALUE} < 正常价格",
        },
    },
    summary: {
        type: String,
        trim: true,
        required: [true, "summary is required!"],
    },
    description: {
        type: String,
        trim: true,
        required: [true, "description is required!"],
    },
    imageCover: {
        type: String,
        trim: true,
        required: [true, "imageCover is required!"],
    },
    images: {
        type: [String],
        required: [true, "images required!"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    },
    startDates: {
        type: [Date],
    },
    testMongooseMiddlewareSave: {
        type: String,
        trim: true,
    },
    vipTour: {
        type: Boolean,
        default: false,
    },
    /**
     * 构建: 位置建模( 完成笔记 )
     *      0. 确定所需属性, 保证脚本导入mock数据正确性
     *      1. 脚本: 导入mock数据
     */
    startLocation: {
        type: { // 注意: 当前type字段名，就为type，并非语法
            type: "String",
            default: "Point",
            enum: ["Point"],
        },
        coordinates: [Number],
        address: String,
        description: String,
    },
    locations: [
        {
            type: { // 注意: 当前type字段名，就为type，并非语法
                type: "String",
                default: "Point",
                enum: ["Point"],
            },
            coordinates: [Number],
            address: String,
            description: String,
        },
    ],
    /**
     * 构建: 建模( 嵌入 - 不推荐 ): 导游( 完成笔记 )
     *      a) 注意: 因为嵌入模拟，故要写中间件查询
     */
    // guides: {
    //     type: Array,
    // },

    /**
     * 构建: 建模 - 导游数据模型( 引用 - 推荐 - 完成笔记 )
     *      a) 目的: 此id为mongodb要求类型id，方便之后做查询引用逻辑
     *      b) type: mongoose.Schema.ObjectId: mongoose schema id特殊写法, 方便查询
     *      c) ref: 查询数据集
     */
    guides: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "users", // 查询数据集 ( 核心 )
        },
    ],
},
{ // 定义虚拟属性，mongoose.schema增加入参: 允许虚拟属性输出 ( 完成笔记 )
    toJSON: { virtuals: true }, // 虚拟属性变为真实
    toObject: { virtuals: true }, // 虚拟属性可被输出
});

/**
 * 接口索引: 增加索引，提高查询性能 ( 完成笔记 )
 *      a) 比较: 通过接口统计数据对比得知，有索引性能提升一大截
 *      b) 注意: compass查看新建的索引, 有时需要等待较长的时间，才能生效 ( 截图 )
 *      c) 索引类型:
 *          0. 单字段索引
 *          1. 复合字段索引
 *              a) 使用场景: 用在经常一起过滤查询的字段上
 *      d) 索引写法: 类型 1/-1升序/降序, 二者并无差别 ( 核心 )
 *      e) 索引使用法则: ( 核心 )
 *          0. 索引不可随意使用，因为他特别占用资源
 *          1. 索引最好使用在高频率查询字段上, 建立高读写比数据库
 *          2. 总之一句话: 好钢用在刀刃上
 */
tourSchema.index({
    price: 1,
    ratingsAverage: -1,
});
tourSchema.index({
    difficulty: 1,
});
/**
 * 地理空间查询: 增加startLocation空间坐标索引, 提高查询过滤性能( 完成笔记 )
 *      a) 注意: 索引单位, '2dsphere' -> 代表二维平面上的点, mongoose的游戏规则
 */
tourSchema.index({
    startLocation: "2dsphere",
});

/**
 * 定义虚拟属性，并根据真实属性计算，并将虚拟属性输出 ( 完成笔记 )
 *      a) 注意:
 *          0. 回调函数必须使用function，这样才能正常的使用this来获取指定字段数据
 *          1. 虚拟属性是不会存储在数据库中的
 */

tourSchema.virtual("testVirtualDuration").get(function () {
    return this.duration / 7;
});

/**
 * 虚拟填充 - mongoose( 完成笔记 )
 *      a) 应用场景: 子知父，父不知子, 使父知子的查询方式
 *      b) 使父知子的查询方式: 有二种
 *          0. 手动查询
 *          1. 虚拟填充( mongoose )
 *              a) 既能填充数据结构，又不会存储在数据库中
 *              b) 原因: 无限增长的数组存储在数据库中，是很可怕的，不可行
 *              c) 虚拟填充优势: 避免数据库存储无限延伸的数组，将所需引用的子项进行实时查询计算
 *      c) 注意: 无限增长的数组添加的schema，禁止此操作
 */
tourSchema.virtual("reviews", {
    ref: "reviews", // 从review文档中查询: 从mongoose那个文档查询
    foreignField: "tourId", // tour对应review中存储的id: 子数据存储的父亲id字段名
    localField: "_id", // 对应字段名称 ( 核心 - 是父与子联系查询的核心 ): 父亲当前的id字段名
});

/**
 * mongoose: 存储中间件 | 文档中间件 | post hooks ( 完成笔记 )
 *      a) xxxxSchema.pre("save",function(){}): 保存数据时促发
 *      b) 注意:
 *          0. insertMany()不会促发此中间件
 *          1. 仅save命令时，才能被中间件截获
 *          2. 中间件可以有多个 --> 中间件next() --> 在去执行其他中间件 --> 如果无其他中间件则回归到主逻辑 ( 核心 )
 *          3. 回调函数必须使用function: 这样才能正常的使用this截获加工数据
 *          4. schema登记: 如果有新的存储字段，注意在mongoose.schema登记
 *      c) this: 代表当前准备存储的数据 ( 核心 )
 *
 */
// 目的: 将this.name加工存储在this.testMongooseMiddlewareSave字段,至数据库
//      0. this代表当前准备存储的数据 ( 核心 )
tourSchema.pre("save", function (next) {
    this.testMongooseMiddlewareSave = slugify(this.name, { lower: true });
    next(); // 注意: 中间件必须要有next()否则逻辑将阻塞
});

/**
 * mongoose: 查询中间件( 完成笔记 )
 *      a) xxxxSchema.pre("find",function( next ){}): 查询数据前促发
 *          0. 注意: 仅save命令时，才能被中间件截获
 *      b) xxxxSchema.pre(/^find/,function( next ){}): 查询数据前促发
 *          0. 注意: 包含find字段的方法, 都能被中间件拦截, 包含findOne(), findById()等....
 *      c) xxxxSchema.post(/^find/,function( docs, next ){}): 查询完毕后，find输出数据时促发
 *          0. docs: 代表查询的结果
 *      d) 运算符:
 *          0. $ne: 屏蔽符合条件的数据
 *      e) mongoose中间件查询文档: https://mongoosejs.com/docs/middleware.html#types-of-middleware
 *      f) 注意:
 *          0. 中间件必须要有next()否则逻辑将阻塞
 *          1. 回调函数必须使用function: 这样才能正常的使用this截获加工数据
 */
// 目的: 隐藏vip客户数据
// tourSchema.pre("find", function (next) { // 普通中间件抓取方法, vip客户资料仅在find方法时不透露
tourSchema.pre(/^find/, function (next) { // 正则中间件抓取方法, vip客户资料将不会出现在任何相关查询方法中
    this.find({ vipTour: { $ne: true } }); // 当vipTour字段为true时，不输出此数据 ( 核心 )
    this.start = Date.now(); // 开始查询时间
    next();
});

tourSchema.post(/^find/, function (docs, next) {
    console.log(`FindTime: ${Date.now() - this.start}ms`); // 计算查询消耗时间 ( 完成笔记 )
    // console.log("docs", docs);
    next();
});

/**
 * populate: 填充数据中间件写法 ( 完成笔记 )
 */
tourSchema.pre(/^find/, function (next) {
    this.populate({
        path: "guides", // path: 目标填充字段
        select: "-__v -role", // select: 取消指定字段输出
    });
    next();
});

/**
 * mongoose: 聚合中间件( 完成笔记 )
 *      a) this.pipeline(): 包含聚合运算符数组, 可进行编辑, 以此到达中间件加工的目的
 *          0. 聚合中间件: 通过this.pipeline拦截，聚合命令，并做相应逻辑，从而过滤掉隐秘客户数据
 *      b) 中间件的作用: 避免多余的重复代码 ( 中间件的意义 - 核心 )
 *      c) .unshift(): 在数组末尾加入相应，"聚合运算符命令"，做相应逻辑
 *          0. .unshift()为标准的处理array的js函数，并非是第三方, 参考es5
 */
// 目的: vip客户数据, 不进行数据分析 | 屏蔽数据分析方法
// tourSchema.pre("aggregate", function (next) {
//     console.log("this.pipeline", this.pipeline());
//     this.pipeline().unshift({
//         $match: { vipTour: { $ne: true } },
//     });
//     next();
// });

/**
 * 构建: 查询导游中间件( 为嵌入建模使用 - 不推荐 )( 完成笔记 )
 *      a) 注意: 因为嵌入模拟，故要写中间件查询
 */
tourSchema.pre("save", async function (next) {
    const guidesPromises = this.guides.map(async (item) => await User.findById(item));
    this.guides = await Promise.all(guidesPromises); // 群体等待异步执行完毕
    next();
});


const Tour = mongoose.model("tours", tourSchema);

module.exports = Tour;

