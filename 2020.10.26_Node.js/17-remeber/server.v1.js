const express = require("express");
const morgan = require("morgan");

const app = express();

// 回忆: 中间件: post处理入参
app.use(express.json());

// 回忆: 使用中间件morgan请求包的状态详情
app.use(morgan("dev"));

// 回忆: 自定义全局中间件,express中间件逻辑
app.use((req, res, next) => {
    console.log("全局中间件 :>> ");
    req.reqTime = new Date().toISOString(); // 塞个值，此值可在下方接口均可调用
    next(); // 中间件别忘记此步骤
});

// 回忆: 普通的send请求
app.get("/", (req, res) => {
    res.status(200).send("Hello Word!");
});

// 回忆: 返回json数据
app.get("/json", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Hello Word!",
    });
});

// 回忆: post类型接受入参
app.post("/json", (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            "req.params": req.params,
            "req.body": req.body, // 必须保证此中间件存在app.use(express.json());
            "req.query": req.query,
        },
    });
});

// 回忆: 标准化的API命名方式
// 回忆: post请求类型获取3种入参方式
app.post("/api/v1/tours/:id", (req, res) => {
    const { params, body, query } = req;
    res.status(200).json({
        success: true,
        data: {
            params, // url路由变量入参
            body, // url请求入参
            query, // url入参
        },
    });
});

// 回忆: 构建patch请求类型
app.patch("/api/v1/tours/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        success: true,
        data: {
            id,
            ...req.body,
        },
    });
});

// 回忆: 构建delete请求类型
//          状态码: 204, 不会返回内容
app.delete("/api/v1/tours/:id", (req, res) => {
    res.status(204).json({
        success: true,
        data: null,
    });
});

// 回忆: app.route写法
const handleApiGetOther = (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            data: "test",
            time: req.reqTime, // 中间件塞入的值
        },
    });
};
const handleApiPostOther = (req, res) => {
    res.status(200).json({
        success: true,
        data: req.body,
    });
};

// 回忆: app.route写法
app.route("/api/v1/other").get(handleApiGetOther).post(handleApiPostOther);

// 回忆: express监听接口
app.listen(3000, () => {
    console.log("listen - 3000");
});

