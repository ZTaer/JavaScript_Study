const express = require("express");
const morgan = require("morgan");

const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/user.routes");
const tourRoute = require("./routes/tour.routes");
const reviewRoute = require("./routes/review.routes");

const AppError = require("./utils/app-error.utils");
const ErrorControllers = require("./controllers/error.controllers");

/**
 * 0. 全局中间件 - 区域:
 */
const app = express();

/**
 * cookie相关 ( 完成笔记 )
 */
app.use(cookieParser());

/**
 * 设置安全性的http包头 ( 完成笔记 )
 *      a) 目的: 设置安全性的http包头, 防xss攻击
 *      b) 安装: yarn add helmet
 *      c) 安全包头: 包头，多出了很多属性，浏览器可以理解这些安全属性
 *
 */
app.use(helmet());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

/**
 * 同一IP访问次数限制( 完成笔记 )
 *      a) 目的: 屏蔽多次频繁访问的IP
 *      b) 安装: yarn add express-rate-limit
 *      c) 计数逻辑: 将在服务重启后重置，或者约定时间到期重置
 *      d) 429状态码: 代表访问次数过多，遭到访问限制
 */
// 允许同一个IP，在一小时内最大访问数为100次
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Frequent visits, please try again in 1 hour!",
});
// 将限制IP逻辑，应用至对应路由
app.use("/api", limiter);

// 生成静态文件
app.use(express.static(`${__dirname}/public`));

// 解析req.body | 限制传输包的大小 ( 完成笔记 )
app.use(express.json({ limit: "10kb" }));

/**
 * 安全逻辑: 防御NoSql注入攻击，XSS攻击 ( 完成笔记 - 核心 )
 *      a) 防御NoSQL
 *          0. 安装: yarn add express-mongo-sanitize
 *          1. 防御NoSql: 本质上是清除mongose运算符例$符号等...
 *      b) 防御XSS攻击
 *          0. 安装: yarn add xss-clean
 *      c) 注意: 安全逻辑，放置express.json解析数据之后
 */
app.use(mongoSanitize());
app.use(xssClean());

/**
 * 安全逻辑: 防止参数污染 ( 完成笔记 - 核心 )
 *      a) 参数污染是什么: 重复的入参，导致逻辑错误等其他错误入参方式...
 *      b) 安装: yarn add hpp
 *      c) 防御逻辑: 入参去重
 *          0. 注意: 某些场景需要重复入参，则使用参数白名单，在白名单中的参数，将不进行去重
 *      d) hpp({ whitelist:["白名单字段"] }): 在此字段，将不去重
 */
app.use(hpp({
    whitelist: ["duration", "ratingsQuantity", "ratingsAverage", "difficulty", "price", "maxGroupSize"],
}));


app.use((req, res, next) => {
    /**
     * 查看: header信息 | 包头信息 ( 完成笔记 )
     */
    console.log("全局中间件!", req.headers);
    req.nowTime = new Date().toISOString();
    next();
});



/**
 * 1. 全局路由 - 区域:
 */
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/reviews", reviewRoute);

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
