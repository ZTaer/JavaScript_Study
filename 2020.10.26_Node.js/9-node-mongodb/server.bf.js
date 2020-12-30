const dotenv = require("dotenv");

dotenv.config({ path: "./config.produce.env" });
// dotenv.config({ path: "./config.development.env" });

/**
 * Mongoose: Node.js连接MongoDB的中间人 | 注意: 当前为测试功能代码块 ( 完成笔记 - 核心 )
 *      0. 目的: Node.js连接MongoDB的中间人
 *      1. 安装: yarn add mongoose
 *      2. mongoose.connect(): 连接数据库
 *          a) 模型: mongoose.connect( mdb链接, 功能属性参数 )
 *          b) 功能属性参数:
 *              0. useNewUrlParser: true,
 *              1. useCreateIndex: true,
 *              2. useFindAndModify: false,
 */

const mongoose = require("mongoose");
const app = require("./app");

// a) 数据库链接
const DB_NETWORK = process.env.MONGODB_NETWORK;
const DB_LOCAL = process.env.MONGODB_LOCAL;

// b) 连接数据库
mongoose.connect(
    DB_NETWORK, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
).then((data) => console.log("连接成功!"));

/**
 * Mongoose.Schema: 强大的数据效验功能 | 注意: 当前为测试功能代码块 ( 完成笔记 )
 *      a) new mongoose.Schema({ ...xxx }): 构建Schema
 *      b) {}属性功能:
 *          0. type: 指定数据类型
 *              a) String: 字符串类型
 *              b) Number: 数字类型
 *              c) Bollen: 布尔类型
 *          1. required: 是否必填
 *              a) 报错提示写法: [ true, '报错信息' ]
 *          2. unique: 是否唯一
 *              a) 意思: 当前属性，不可重复出现在数据库中
 */
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name为必填项!"],
        unique: true,
    },
    price: {
        type: Number,
        default: 5,
    },
    rating: {
        type: Number,
        required: [true, "rating为必填项!"],
    },
});

/**
 * Mongoose.model: 决定数据存储位置并将合集与Schema相连 | 注意: 当前为测试功能代码块 ( 完成笔记 - 核心 )
 *      a) 构建合集 | 并指定mongoose.Schema
 *      b) 数据操控: 决定合集，以及数据存储位置，以及mongoose.Schema与对应合集相关联
 *      c) 注意: 文档规范, 在new对象使可用: Model.prototype.xxx();
 *      d) 模型: mongoose.model( "MongoDB存储合集名称", 相关联的mongoose.Schema ): 核心
 */
// a) 存储位置
const Tour = mongoose.model("Tour", tourSchema);

// b) 构建数据
const testTour = new Tour({
    name: "one",
    price: 123,
    rating: 4.5,
});

// c) 数据操控: 存储数据逻辑
testTour
    .save()
    .then((msg) => console.log("msg", msg))
    .catch((err) => console.log("err", err));


// console.log('process.env', process.env);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});
