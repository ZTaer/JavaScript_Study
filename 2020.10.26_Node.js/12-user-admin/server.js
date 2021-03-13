const dotenv = require("dotenv");

/**
 * 环境切换
 */
// dotenv.config({ path: "./config.produce.env" });
dotenv.config({ path: "./config.development.env" });

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
console.log("数据库连接中...");
mongoose.connect(
    DB_NETWORK, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
).then((data) => console.log("数据库连接成功!"));
// .catch((err) => console.log("数据库连接失败!", err));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});

/**
 * 最后的安全网 ( 完成笔记 )
 *      a) 注意: 针对意外的程序错误处理
 *      b) 作用: 监听全局意外错误
 *      c) process.on( 'unhandledRejection', function ) | 未处理拒绝对象 | unhandled rejection
 *          0. 复现: 数据库连接失败
 *              a) 注意: 连接数据库逻辑无catch逻辑，将错误引入到全局，才能被process.on( 'unhandledRejection', function )抓取
 *          1. 错误处理逻辑:
 *              a) server.close(()=>{}) - 关闭服务
 *              b) process.exit(1) - 退出程序
 *              c) 生产环境: 使用第三方工具来重启服务
 *      d) process.on("uncaughtException", function ) | 处理未捕获异常错误 | unhandled rejection
 *          0. 复现: console.log(xxx); 打印一个未定义变量，引发错误
 *          1. 错误监听范围: 在其监听逻辑之后的代码，之前代码无法监听错误
 */
process.on("unhandledRejection", (error) => {
    console.log("Error", error.name, error.message);
    console.log("unhandleRejection: 服务炸了");
    server.close(() => {
        process.exit(1);
    });
});

process.on("uncaughtException", (error) => {
    console.log("Error", error.name, error.message);
    console.log("uncaughtException: 程序异常");
    server.close(() => {
        process.exit(1);
    });
});
