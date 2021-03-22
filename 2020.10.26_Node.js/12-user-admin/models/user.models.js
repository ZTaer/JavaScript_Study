const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

/**
 * 构建用户模型( 等待笔记 - 核心 )
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
});


/**
 * 构建: 通过schema中间件加密password( 等待笔记 )
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

const User = mongoose.model("users", userSchema);

module.exports = User;
