const User = require("../models/user.models");
const catchAsync = require("../utils/catch-async.utils");

/**
 * 构建用户逻辑 ( 等待笔记 )
 */

// 注册逻辑
exports.userSinUp = catchAsync(async (req, res, next) => {
    const {
        email, phone, name, photo, password, passwordConfirm,
    } = req.body;

    const newUser = await User.create({
        email, // 必填
        phone, // 选填
        name, // 必填
        photo, // 选填
        password, // 必填
        passwordConfirm, // 必填
    });

    res.status(201).json({
        status: "success",
        data: newUser,
    });
});
