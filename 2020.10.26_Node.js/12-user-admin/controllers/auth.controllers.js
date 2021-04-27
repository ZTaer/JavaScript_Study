const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const crypto = require("crypto");
const User = require("../models/user.models");
const catchAsync = require("../utils/catch-async.utils");
const AppError = require("../utils/app-error.utils");
const SendEmail = require("../utils/email.utils");

/**
 * 运算逻辑区
 */
// 根据用户id生成jwt token
const handleOutputToken = (userId) => jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
);


// 构建: 通用方法, 发送用户新生成的token逻辑( 完成笔记 )
//      a) 构建原因: 此方法重复使用地方较多
// 扩展: 通过Cookie发送JWT( 完成笔记 )
//      a)原因: 为了安全性JWT不可存储在localStorage
//      b) Cookie是什么: 服务器发送给前端一串字符串
//      c) res.cookie( cookie键值, cookie内容, cookie选项 ): 发送cookie方法 ( 核心 )
//          0. Cookie选项:
//              a) expires: Cookie过期时间
//                  0. 配置环境变量: Cookie过期时间
//                  1. 设置90天的有效期: 注意转换为ms单位
//              b) secure: true; 仅在加密安全的链接上发送Cookie( https )
//                  0. 注意: 建议仅生产模式，启用
//              c) httpOnly: true; 使浏览器无法修改Cookie( 预防XSS攻击 )
//      d) 前端Cookie接受逻辑: 后端发送Cookie后, 不同字段名称为追加模式，同字段名称为替换模式 ( 核心 )
const handleCpuCreateTokenSendTo = (user, statusCode = 200, res) => {
    try {
        const token = handleOutputToken(user._id);

        const cookieOption = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };
        if (process.env.NODE_ENV === "produce") cookieOption.secure = true; // 仅在生产模式，开启此安全选项

        res.cookie("JWT", token, cookieOption); // 发送Cookie ( 核心 )

        user.password = undefined; // 防止密码泄露

        res.status(statusCode).json({
            status: "success",
            data: { user },
        });
    } catch {
        console.warn("handleCpuCreateTokenSend error");
    }
};

const handleCpuFilterKeyNameDate = (objectDate, ...keyName) => {
    try {
        const result = {};
        Object.keys(objectDate).forEach((item) => {
            if (keyName.includes(item)) result[item] = objectDate[item];
        });
        return result;
    } catch {
        console.warn("handleCpuFilterKeyNameDate error");
        return {};
    }
};


/**
 * 构建: API注册用户逻辑 ( 完成笔记 )
 */

// 注册逻辑
exports.userSinUp = catchAsync(async (req, res, next) => {
    const {
        email, phone, name, photo, password, passwordConfirm, passwordChangeAt,
    } = req.body;


    const newUser = await User.create({
        email, // 必填
        phone, // 选填
        name, // 必填
        photo, // 选填
        password, // 必填
        passwordConfirm, // 必填
        passwordChangeAt,
    });

    /**
     * 构建: token | 初步签署构建JWT ( 完成笔记 )
     *      a) jwt.sign( {}, "", {} ); ( 核心 )
     *          0. 入参: paylad, secret, config
     *              a) payload: 就是jwt组成部分之一
     *              b) secret: 构建独属自己的32位密码 ( 放置环境变量 )
     *              c) config: 配置属性
     *                  0. expiresIn: 设定token到期时间 ( 放置环境变量 )
     *
     */
    handleCpuCreateTokenSendTo(newUser, "201", res);
});


/**
 * api用户登陆逻辑( 完成笔记 )
 *      a) 注意:
 *          0. 特定条件下return next()的原因
 *              a) 确保逻辑立即结束完成
 *              b) 防止因在同一个controller逻辑下，因二次res而报错
 *          1. 外泄指定字段方式: 让mongoose schema下的select: false属性数据暴露输出
 *              a) 外泄字段: await User.findOne({ email }).select("+password");
 *              b) 原因: mongoose schema限制了password输出: 故使用.select("+password")来指定数据输出
 *              c) 含义: 根据email查询用户数据，并指定一定要输出password字段数据, 方便用户验证
 *      b) 构建: 初步构建基本的登陆逻辑
 *          0. 第一步: 验证用户是否输入，email和密码
 *          1. 第二步: 验证email和密码的正确性
 *          2. 第三步: 如果一切正确，则生成新的token并发送token
 */
exports.userLogIn = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    // 第一步: 验证用户是否输入，email和密码
    if (!email || !password) {
        return next(new AppError("user password or email error!", 404));
    }

    // 第二步: 验证email和密码的正确性
    //      a) 原因: mongoose schema限制了password输出: 故使用.select("+password")来指定数据输出
    //      b) 含义: 根据email查询用户数据，并指定一定要输出password字段数据, 方便用户验证
    //      c) 构建: 通用性验证用户逻辑方便调用，在Model下 | 构建: 通用性逻辑方便调用
    //          0. 注意: 尽量使用异步逻辑
    //          1. 验证密码思路:
    //              a) 用户提交密码
    //              b) 进行加密
    //              c) 然后与数据库中密码对比验证
    //          2. bcrypt.compare( 提交的密码，数据库密码 ): 对比验证，返回true则通过
    // 使用: schema method 通用性逻辑 ( 完成笔记 )
    //      a) 注意: schema method引入使用方式, 且为异步函数
    //      b) 模型: xxx.correctPassword
    const findResult = await User.findOne({ email }).select("+password");
    if (!findResult || !await findResult.correctPassword(password, findResult.password)) {
        return next(new AppError("user password error or email!", 401));
    }

    // 第三步: 如果一切正确，则生成新的token并发送token
    handleCpuCreateTokenSendTo(findResult, "200", res);
});

/**
 * 构建: 保护路线, 访问路线必须登陆，并验证token正确性( 完成笔记 )
 *      a) 保护思路: 路由加中间件验证逻辑
 *      b) JWT验证用户逻辑顺序
 *          0. 获取token
 *          1. 验证token
 *          2. 验证用户是否正确
 *          3. 签发token后，检测用户是否修改了密码
 *          4. 授予访问受保护路线的权限 - 铺垫
 *      c)
 */

exports.protect = catchAsync(async (req, res, next) => {
    // 0. 获取token
    //      a) 验证包头authorization是否存在token
    //          0. 存在: 则保存token
    //          1. 不存在: 则报错
    //          2. 从req.headers.authorization( 包头 ): 获取token信息
    let token = "";
    if (
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return next(new AppError("not log in", 401));
        // TODO: SSS
    }

    // 1. 验证token
    //      a) 主要目的: 验证token
    //          0. 解码: 如果token解码成功，则返回用户id以及token签发有效期
    //              a) decoded { id: '6058a7595e444f46501c0ec3', iat: 1616425497, exp: 1624201497 }
    //          1. 验证: 在验证用户
    //      b) 验证token: jwt.verify()
    //      c) promisify: 能直接获得异步回调结果, 简化逻辑
    //          0. 来源: const { promisify } = require("util");
    //      d) 注意:
    //          0. 当jwt错误时，要构建错误逻辑: "JsonWebTokenError"
    //          1. 当jwt有效时间过期时，要构建错误逻辑: "TokenExpiredError"
    //              a) 注意: 新版本可能依然是 "JsonWebTokenError"
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log(`decoded`, decoded);

    // 2. 验证用户是否正确
    //      a) 主要目的: 验证用户是否存在，防止token存在，用户不存在的情况
    const freshUser = await User.findById(decoded.id);
    if (!freshUser) {
        return next(new AppError(" The user belonging to this token does no longer exist! ", 401));
    }

    // 3. 签发token后，检测用户是否修改了密码
    //      a) 逻辑流程:
    //          0. 构建: 需要用户修改密码时间字段
    //          1. 构建: 通用性逻辑, 验证比较，token发行时间与用户修改密码时间，判断是否为过期token
    //              a) 是: 要求用户重新登陆
    //              b) 否: 通行
    if (await freshUser.changePasswordAfter(decoded.iat)) {
        return next(new AppError(" token error , please log in again ", 401));
    }

    // 4. 用户信息保存在req中，方便后续中间件做加工逻辑 - 铺垫
    req.user = freshUser;
    next();
});


/**
 * 构建: 用户权限验证逻辑( 完成笔记 )
 *      a) role: ["xxx"]为数据类型，此为es6入参写法
 *      b) req.user.role: 只所以能获取到，用户信息，是因为在上放中间件做了铺垫，将查询到的user信息保存在了req中
 *      c) 状态码: 403, 代表无权限
 *      d) 如果用户身份符合要求，则通过逻辑
 */
exports.restrictTo = (...role) => (req, res, next) => {
    if (!role.includes(req.user.role)) {
        return next(new AppError(" You do not have permission! ", 403));
    }

    next();
};


/**
 * 构建: 忘记密码逻辑( 完成笔记 )
 *      0. 获取用户的email
 *      1. 生成重置密码token
 *          a) 注意: token一定要限制有效时间，默认10min
 *          b) token: 加密存储数据库中
 *          c) 中间件: 无视校验存储
 *              0.  user.save({ validateBeforeSave: false });
 *              1. 注意: 直接将中间件加工后的，数据保存在数据库中
 *      2. 邮寄邮件，放置重置密码url
 *          a) url模型: http://127.0.0.1:3000/api/v1/user/forgotpassword/38ce95f535b79719cf7d99b6950c8c8b64576a5d81655ef73cf7349c7a5442f1
 *              0. req.protocol: 获取协议
 *              1. req.get("host"): 获取域名
 *          b) 注意: 如果邮件发送失败，则置空数据库中的，"重置token"，以及"重置token有效时间"
 */
exports.forgotPassword = catchAsync(async (req, res, next) => {
    // 0. 获取用户的email
    const user = await User.findOne({ emial: req.body.email });
    if (!user) {
        return next(new AppError("user does not exist!", 404));
    }

    // 1. 生成重置密码token
    //      a) 注意: token一定要限制有效时间，默认10min
    //      b) token: 加密存储数据库中
    //      c) 中间件: 无视校验存储
    //          0.  user.save({ validateBeforeSave: false });
    //          1. 注意: 直接将中间件加工后的，数据保存在数据库中
    const resetToken = await user.createPasswordResetToken();
    user.save({ validateBeforeSave: false }); // 代表无视校验存储

    // 2. 邮寄邮件，放置重置密码url
    //      a) url模型: http://127.0.0.1:3000/api/v1/user/forgotpassword/38ce95f535b79719cf7d99b6950c8c8b64576a5d81655ef73cf7349c7a5442f1
    //          0. req.protocol: 获取协议
    //          1. req.get("host"): 获取域名
    //      b) 注意: 如果邮件发送失败，则置空数据库中的，"重置token"，以及"重置token有效时间"
    const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/user/forgotpassword/${resetToken}`;
    const message = `<h1>重置密码: </h1><a href="${resetUrl}" target="_blank" >${resetUrl}</a>`;

    try {
        await SendEmail({
            email: user.email,
            subject: "Reset password valid time 10 minutes!",
            message,
        });

        res.status(200).json({
            status: "success",
            data: "Reset password link sent email!",
        });
    } catch (error) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        user.save({ validateBeforeSave: false });
        return next(new AppError("Failed to send mail, please try again!", "500"));
    }
});

/**
 * 构建: token重置密码逻辑( 完成笔记 )
 */
exports.resetPassword = catchAsync(async (req, res, next) => {
    console.log(`req.params`, req.params);
    // 0. 获取"重置令牌"
    const { resetTokenId } = req.params;
    const { password, passwordConfirm } = req.body;
    const encryptResetTokenId = crypto.createHash("sha256").update(resetTokenId).digest("hex");

    // 1. 对比重置令牌
    //      a) 验证方式:
    //          0. url获取的令牌加密后 === 数据库中的已加密重置令牌
    //          1. 当前时间 < 数据库中的有效期时间10min
    //      b) 通过: 令牌相同则重置密码
    //      c) 不通过: 则返回错误信息, 终止逻辑
    const user = await User.findOne({
        passwordResetToken: encryptResetTokenId,
        passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) { return next(new AppError("user not find!", 400)); }

    // 2. 更新改变密码时间( 此逻辑放置中间件最佳 )
    user.password = password;
    user.passwordConfirm = passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    // 3. 发送新生成的jwt
    handleCpuCreateTokenSendTo(user, "201", res);
});

/**
 * 更新当前用户密码: 验证当前密码正确性, 在修改密码 ( 不通过邮箱修改密码 - 完成笔记 )
 *      0. 查询用户是否存在
 *          a) 注意: 查询用户时，需要输出password用于校验密码正确性
 *      1. mongoose验证当前密码是否正确 ( 核心 )
 *          a) await user.correctPassword(password, user.password): true代表密码正确，否则错误
 *              0. 注意: 为异步
 *              1. 注意: 此函数并非官方函数，此乃构建的中间件通用性逻辑方法, 方便校验密码, 具体查看user.models.js
 *          b) user: 为查询结果
 *      2. 如果密码正确，则更新保存密码
 *          a) 注意: 这里一定要用save()保存，方便mongoose.schema拦截校验密码格式
 *      3. 发送新的JWT TOKEN
 *          a) 原因: 只要用户密码有变动，都要重新生成token
 */
exports.updatePassword = catchAsync(async (req, res, next) => {
    // 0. 查询用户是否存在
    //      a) 注意: 查询用户时，需要输出password用于校验密码正确性
    const user = await User.findById(req.user.id).select("+password");
    if (!user) return next(new AppError("user not find!", 400));

    // 1. mongoose验证当前密码是否正确 ( 核心 )
    //      a) await user.correctPassword(password, user.password): true代表密码正确，否则错误
    //          0. 注意: 为异步
    //          1. 注意: 此函数并非官方函数，此乃构建的中间件通用性逻辑方法, 方便校验密码, 具体查看user.models.js
    //      b) user: 为查询结果
    const { password, passwordConfirm, passwordUpdate } = req.body;
    if (!(await user.correctPassword(password, user.password))) {
        return next(new AppError(" password error! ", 401));
    }

    // 2. 如果密码正确，则更新保存密码
    //      a) 注意: 这里一定要用save()保存，方便mongoose.schema拦截校验密码格式
    user.password = passwordUpdate;
    user.passwordConfirm = passwordConfirm;
    await user.save();

    // 3. 发送新的JWT TOKEN
    //      a) 原因: 只要用户密码有变动，都要重新生成token
    handleCpuCreateTokenSendTo(user, "201", res);
});


/**
 * 构建: 更新当前用户个人信息( 完成笔记 )
 *      a) 注意: 防密码更新
 *      b) 不校验存储数据方式: ( 核心 )
 *          0. Xxx.save({ validateBeforeSave: false });
 *          1. Xxx.findByIdAndUpdate( 用户id, 保存的object字段数据, 配置  );
 *              a) 配置: { new: true, runValidators: true }
 *                  0. new: true --> 返回更新后的Object数据
 *                  1. runValidators: true --> 更新的数据，要经过mongoose.schema校验
 */
exports.updateCurrentUser = catchAsync(async (req, res, next) => {
    // 0. 防密码更新
    const { password, passwordConfirm } = req.body;
    if (password || passwordConfirm) {
        return next(new AppError("Prohibit changing password!", 401));
    }

    // 1. 更新用户个人信息
    const updateUser = await User.findByIdAndUpdate(req.user.id, handleCpuFilterKeyNameDate(req.body, "name", "phone"), {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        status: "success",
        data: updateUser,
    });
});

/**
 * 构建: 注销当前用户( 完成笔记 )
 *      0. 基本逻辑: 用户注销，其实并为在数据库中，真正的删除，只是改变一种昨天字段active: true/false, 方便用户在未来重新激活账号
 */
exports.deleteCurrentUser = catchAsync(async (req, res, next) => {
    const { password } = req.body;
    const userId = req.user.id;

    // 0. 查询用户是否存在
    const user = await User.findById(userId).select("+password");
    if (!user) {
        return next(new AppError("User does not exist!", 400));
    }

    // 1. 验证用户密码是否正确
    if (!(await user.correctPassword(password, user.password))) {
        return next(new AppError("password error!", 401));
    }

    // 2. 改变当前用户active状态为false
    //      a) false代表注销用户
    //      b) true代表正常用户
    user.active = false;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        status: "success",
        data: user,
    });
});

