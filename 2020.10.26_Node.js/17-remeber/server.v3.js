const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tour.router");
const userRouter = require("./routes/user.router");

const app = express();

/**
 * 中间件相关
 */
app.use(express.json());
app.use(morgan("dev"));


app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

/**
 * 初始化
 */
app.listen(3000, () => {
    console.log("http://localhost:3000/");
});


