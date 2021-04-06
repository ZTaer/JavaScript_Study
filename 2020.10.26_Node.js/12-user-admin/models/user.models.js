const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

/**
 * 构建用户模型( 完成笔记 - 核心 )
 *      a) 总体逻辑流程:
 *          0. 构建schema: 用户mongoose.schema
 *              a) 构建: 通过schema中间件加密password
 *          1. 构建API逻辑: 用户controllers
 *              a) 构建: API注册用户逻辑
 *          2. 构建API路由: 用户route
 *          3. 测试: postman
 *          4. 查看: 数据库
 *              a) 注意: 密码不可明文存储在数据库中，要以加密的行式 ( 核心 )
 *      b) schema属性:
 *          0. lowercase: true | 要求全部小写
 *      c) 校验: 第三方库,validator,
 *          0. validator.isEmail 验证邮箱
 *
 */
// email, phone, userName, password, passwordConfirm, photo
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "email required"],
        validate: [validator.isEmail, "email format error"], // 必须为email格式
        lowercase: true, // 全部小写
    },
    phone: {
        type: Number,
    },
    name: {
        type: String,
        required: [true, "user name required"],
    },
    photo: {
        type: String,
    },
    password: {
        type: String,
        required: [true, "password error"],
        minlength: 6,
        select: false, //  安全策略: mongoose schema 将passwrod设为select: false, 使接口无法发出密码到外界 ( 完成笔记 )
    },
    passwordConfirm: {
        type: String,
        required: [true, "password confirm error"],
        validate: {
            // 注意: 创建/保存数据时，校验起作用 ( 等待研究 )
            //      a) this.xxx: 仅在fucntion类型函数起作用，索引当前变量属性
            validator: function (el) {
                return el === this.password;
            },
            message: " password !== passwordConfirm ",
        },
    },
    passwordChangeAt: {
        type: Date,
    },
    role: {
        type: String,
        enum: ["admin", "user", "guide", "leader-guide"], // enum: mongose schema枚举类型,保存的数据只能使用指定字段( 等待笔记 )
        default: "user",
    },
    /**
     * 设定: 重置密码令牌字段，以及重置令牌有效时间字段, 如10min( 等待笔记 )
     *      a) 用于: 重置密码逻辑
     */
    passwordResetToken: String,
    passwordResetExpires: Date,
});


/**
 * 构建: 通过schema中间件加密password( 完成笔记 )
 *      0. 防止重复加密: 当密码没有修改时不进行加密
 *          a) this.isModified() mongose schema自带的效验是否改变逻辑
 *      1. 使用bcrypt.hash方法
 *          a) yarn add bcryptjs
 *          b) 第二个参数决定密码强度: 但值越大更加消耗cpu资源，推荐10,12
 *          c) 注意: 此方法为异步
 *      2. 二次确定密码: 不进行同步加密，且不存储到数据库中， 故为undefind, ( 后续逻辑将修正 )
 */
userSchema.pre("save", async function (next) {
    // 不加密: 当密码没有被修改时，不进行加密
    if (!this.isModified("password")) return next();

    // 加密: 给password加密
    this.password = await bcrypt.hash(this.password, 10);

    // 不存储: 排除this.passwordConfirm当为undefind此时字段数据将不进入数据库
    this.passwordConfirm = undefined;
    next();
});

/**
 * 构建: schema下的方法函数 ( 完成笔记 )
 * 构建: schema method 通用性逻辑 ( 完成笔记 )
 *      0. 使用: await 查询后的结果.xxxx();
 *      1. 所以: this.xxx指向的是, 查询后的结果数据, 并非是上放的mongoose schema下的数据
 *      2. 注意: 在使用时，如果为异步逻辑，一定不要忘记使用await
 * 构建: 校验密码逻辑 ( 完成笔记 )
 *      0. 注意: 尽量使用异步逻辑
 *      1. 验证密码思路:
 *          a) 用户提交密码
 *          b) 进行加密
 *          c) 然后与数据库中密码对比验证
 *      2. bcrypt.compare( 提交的密码，数据库密码 ): 对比验证，返回true则通过
 * 构建: 判断用户密码是否修改 < token发行时间( 完成笔记 )
 *      0. 目的: 比较时间, 验证用户是否修改密码, 防止为过期的token
 *      1. jwt创建时间 < 修改密码时间 ---> 代表用户修改了密码，用户需重新登陆，重新生成token
 *      2. xxx.getTime()/1000; 时间戳( ms ) --> 转换 --> 时间戳( 秒 )
 */
// 校验密码逻辑
userSchema.methods.correctPassword = async function (postPassword, userPassowrd) {
    return await bcrypt.compare(postPassword, userPassowrd); // true 密码正确
};

// 构建: 判断用户密码是否修改 < token发行时间
//      a) return false 用户未修改密码，无需重新登陆
//      b) jwt创建时间 < 修改密码时间 ---> 代表用户修改了密码，用户需重新登陆，重新生成token
//      c) xxx.getTime()/1000; 时间戳( ms ) --> 转换 --> 时间戳( 秒 )
userSchema.methods.changePasswordAfter = async function (JWTiat) {
    let result = false;
    if (this.passwordChangeAt) {
        const passwordChangeTime = parseInt(this.passwordChangeAt.getTime() / 1000, 10); // 时间戳转换
        result = passwordChangeTime > JWTiat;
    }
    return result;
};

/**
 * 构建: 生成重置令牌，schema中间件( 等待笔记 )
 *      0. 生成重置令牌: 利用crypto生成token
 *      1. 加密: 加密重置令牌，并保存到数据库
 *      2. 有效时间: 并设定令牌有效，时间为10min, 并存入数据中, 方便后续逻辑加工
 *      3. 注意:
 *          0. 重置令牌必须要加密存储
 *          1. 重置令牌必须要有效时间
 */
userSchema.methods.createPasswordResetToken = async function () {
    const resetToken = crypto.randomBytes(32).toString("hex"); // 生成token
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex"); // 加密存储token
    // 设定有效时间: 当前时间~10分钟后
    //      a) 60 * 1000: 代表一分钟 ( 单位为ms )
    this.passwordResetExpires = Date.now() + 10 * (60 * 1000);

    return resetToken;
};

const User = mongoose.model("users", userSchema);

module.exports = User;
