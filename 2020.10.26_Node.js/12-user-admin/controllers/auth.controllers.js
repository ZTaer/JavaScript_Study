const jwt = require("jsonwebtoken");
const User = require("../models/user.models");
const catchAsync = require("../utils/catch-async.utils");

/**
 * 构建: API注册用户逻辑 ( 等待笔记 )
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

    /**
     * 构建: token | 初步签署构建JWT ( 等待笔记 )
     *      a) jwt.sign( {}, "", {} ); ( 核心 )
     *          0. 入参: paylad, secret, config
     *              a) payload: 就是jwt组成部分之一
     *              b) secret: 构建独属自己的32位密码 ( 放置环境变量 )
     *              c) config: 配置属性
     *                  0. expiresIn: 设定token到期时间 ( 放置环境变量 )
     *
     */
    const token = jwt.sign(
        { id: newUser._id }, // jwt payload
        process.env.JWT_SECRET, // jwt secret
        { // jwt config expiresIn
            expiresIn: process.env.JWT_EXPIRES_IN,
        },
    );

    res.status(201).json({
        status: "success",
        token,
        data: newUser,
    });
});
