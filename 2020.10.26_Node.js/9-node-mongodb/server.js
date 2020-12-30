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

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});
