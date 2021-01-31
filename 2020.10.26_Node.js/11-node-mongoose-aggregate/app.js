const express = require("express");
const morgan = require("morgan");

const userRoute = require("./routes/user.routes");
const tourRoute = require("./routes/tour.routes");
const AppError = require("./utils/app-error.utils");
const ErrorControllers = require("./controllers/error.controllers");

/**
 * 0. 全局中间件 - 区域:
 */
const app = express();

app.use(express.static(`${__dirname}/public`));

app.use(express.json());

app.use((req, res, next) => {
    console.log("全局中间件!");
    req.nowTime = new Date().toISOString();
    next();
});

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

/**
 * 1. 全局路由 - 区域:
 */
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/user", userRoute);

/**
 * 处理不存在的路由地址 ( 完成笔记 )
 *      a) 注意: 处理不存在路由逻辑，要放置在，路由最下方，否则其他路由将无法正常执行
 *      b) 核心流程:
 *          0. 抓取不存在路由
 *              a) 核心: app.all( *, function )
 *          1. 构建: 错误方法函数
 *              a) 目的: 使用错误方法, 故意制造错误，并配置错误信息，以及状态码
 *          2. 构建: 全局错误处理中间件
 *              a) 目的: 使全局错误处理中间件抓取，返回请求结果
 *          3. 构建: 处理controllers统一async错误处理
 *              a) 目的: 避免接口api逻辑重复书写try catch, 抓取错误做统一处理
 *      c) 下方演示3种错误处理方法:
 */

// a) 正常方法:
// app.all("*", (req, res, next) => {
//     res.status(404).json({
//         status: "fail",
//         data: "无此路由!",
//     });

//     next();
// });

// b) 普通方法: 故意制造错误，让错误中间件抓取，用于测试逻辑( 完成笔记 - 不推荐使用 )
//      a) 传递错误信息: new Error; next(err);
//      b) 被错误处理中间件: 抓取到错误属性,做逻辑
//      c) 注意: 这种传递错误机制，为非便捷之法，
// app.all("*", (req, res, next) => {
//     const err = new Error(`没有找到${req.originalUrl}此路由!`);
//     err.status = "fail";
//     err.statusCode = 404;

//     next(err);
// });

// c) 使用: 错误组件 - 处理方法 ( 完成笔记 - 推荐 )
//      a) req.originalUrl: 代表当前访问的路由
app.all("*", (req, res, next) => {
    next(new AppError(`没有找到${req.originalUrl}此路由!`, 404));
});

/**
 * 使用: 全局错误处理中间件( 完成笔记 )
 *      a) 注意: 为了更好的维护性，错误处理逻辑写在了controllers\error.controllers.js
 */
app.use(ErrorControllers);

module.exports = app;
