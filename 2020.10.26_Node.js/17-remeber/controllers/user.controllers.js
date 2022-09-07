// 请求所有的tuser内容
exports.handleApiGetAllUser = (req, res) => {
    res.status(200).json({
        success: true,
        data: { message: "请求所有的user内容" },
    });
};

// 创建user
exports.handleApiCreateUser = (req, res) => {
    res.status(200).json({
        success: true,
        data: { message: "创建user", reqBody: req.body },
    });
};

// 校验字段,用于API接口的局部中间件
exports.handleMidAPiAuthCreateUser = (req, res, next) => {
    const { name = "", password = "" } = req.body;
    if (!name || !password) {
        return res.status(400).json({ success: false, error: "创建用户失败" }); // 局部中间件,注意return
    }
    next();
};
