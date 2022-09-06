// 请求所有的tour内容
exports.handleApiGetAllTour = (req, res) => {
    res.status(200).json({
        success: true,
        data: { message: "请求所有的tour内容" },
    });
};

// 增加tour内容
exports.handleApiAddTour = (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            message: "增加tour内容",
            reqBody: req.body,
        },
    });
};

// 请求指定id tour
exports.handleApiGetTourItem = (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            message: "请求指定id tour",
            reqParams: req.params,
        },
    });
};

// 更新指定id tour
exports.handleApiUpdateTourItem = (req, res) => {
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
exports.handleApiDeleteTourItem = (req, res) => {
    res.status(204).json({
        success: true,
    });
};
