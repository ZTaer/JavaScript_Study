const express = require("express");
const morgan = require("morgan");

const app = express();



/**
 * API逻辑相关
 */

// 请求所有的tour内容
const handleApiGetAllTour = (req, res) => {
    res.status(200).json({
        success: true,
        data: { message: "请求所有的tour内容" },
    });
};

// 增加tour内容
const handleApiAddTour = (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            message: "增加tour内容",
            reqBody: req.body,
        },
    });
};

// 请求指定id tour
const handleApiGetTourItem = (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            message: "请求指定id tour",
            reqParams: req.params,
        },
    });
};

// 更新指定id tour
const handleApiUpdateTourItem = (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            message: "更新指定id tour",
            reqParams: req.params,
            reqBody: req.body,
        },
    });
};

// 删除指定id tour
const handleApiDeleteTourItem = (req, res) => {
    res.status(204).json({
        success: true,
    });
};


/**
 * 中间件相关
 */
app.use(express.json());
app.use(morgan("dev"));

/**
 * 中间件路由管理
 */
const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route("/").get(handleApiGetAllTour).post(handleApiAddTour);
tourRouter.route("/:id").get(handleApiGetTourItem).patch(handleApiUpdateTourItem).delete(handleApiDeleteTourItem);

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

/**
 * 初始化
 */
app.listen(3000, () => {
    console.log("http://localhost:3000/");
});


