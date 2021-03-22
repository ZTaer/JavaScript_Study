const jwt = require("jsonwebtoken");
const User = require("../models/user.models");
const catchAsync = require("../utils/catch-async.utils");
const AppError = require("../utils/app-error.utils");

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
    const token = handleOutputToken(newUser._id);

    res.status(201).json({
        status: "success",
        token,
        data: newUser,
    });
});


/**
 * api用户登陆逻辑( 等待笔记 )
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
    // 使用: schema method 通用性逻辑 ( 等待笔记 )
    //      a) 注意: schema method引入使用方式, 且为异步函数
    //      b) 模型: xxx.correctPassword
    const findResult = await User.findOne({ email }).select("+password");
    if (!findResult || !await findResult.correctPassword(password, findResult.password)) {
        return next(new AppError("user password error or email!", 401));
    }

    // 第三步: 如果一切正确，则生成新的token并发送token
    const token = handleOutputToken(findResult._id);
    res.status(200).json({
        status: "success",
        token,
    });
});

/**
 * 构建: 保护路线, 访问路线必须登陆，并验证token正确性
 *      a) 保护思路: 路由加中间件验证逻辑
 *      b) JWT验证用户逻辑顺序
 *          0. 获取token
 *          1. 验证token
 *          2. 验证用户是否正确
 *          3. 签发token后，检测用户是否修改了密码
 *      c)
 */

exports.protect = catchAsync(async (req, res, next) => {
    // 0. 获取token
    //      a) 验证包头authorization是否存在token
    //          0. 存在: 则保存token
    //          1. 不存在: 则报错
    let token = "";
    if (
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split("-")[1];
    }
    if (!token) {
        return next(new AppError("not log in", 401));
    }

    // 1. 验证token

    // 2. 验证用户是否正确

    // 3. 签发token后，检测用户是否修改了密码
    console.log(`protext 中间件`);
    next();
});
