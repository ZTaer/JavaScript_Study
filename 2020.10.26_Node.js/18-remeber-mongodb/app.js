const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tour.router");
const userRouter = require("./routes/user.router");

const app = express();

/**
 * 中间件相关
 */
app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.static(`${__dirname}/public/`)); // 设定静态文件目录

// 回忆: 自定义全局中间件,express中间件逻辑
app.use((req, res, next) => {
    console.log("全局中间件 :>> ");
    req.reqTime = new Date().toISOString(); // 塞个值，此值可在下方接口均可调用
    next(); // 中间件别忘记此步骤
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);


module.exports = app;



