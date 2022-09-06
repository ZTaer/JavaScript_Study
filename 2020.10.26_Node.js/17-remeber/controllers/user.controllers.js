// 请求所有的tuser内容
exports.handleApiGetAllUser = (req, res) => {
    res.status(200).json({
        success: true,
        data: { message: "请求所有的user内容" },
    });
};
