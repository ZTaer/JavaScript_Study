/**
 * MVC - 基本版MVC架构 ( 完成笔记 )
 *      a) 有数据结构规范化
 *          0. app.js
 *              a) 全局中间件
 *              b) 全局路由
 *          1. server.js
 *              a) 服务端配置
 *          2. controllers文件夹
 *              a) 根据局部路由/局部中间件写的响应逻辑
 *          3. routes文件夹
 *              a) 局部路由
 *              b) 局部中间件
 *          4. models文件夹
 *              a) 放置mongoose给controllers使用
 *                  0. 目的: 用于效验接口数据类型
 */

const express = require("express");
const morgan = require("morgan");

const userRoute = require("./routes/user.routes");
const tourRoute = require("./routes/tour.routes");

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
 * 处理不存在的路由地址 ( 等待笔记 )
 *      a) 注意: 处理不存在路由逻辑，要放置在，路由最下方，否则其他路由将无法正常执行
 */
app.all("*", (req, res, next) => {
    res.status(404).json({
        status: "fail",
        data: "无此路由!",
    });
});

module.exports = app;
