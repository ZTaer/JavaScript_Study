const mongoose = require("mongoose");
const validator = require("validator");

/**
 * 构建用户模型( 等待笔记 - 核心 )
 *      a) 总体逻辑流程:
 *          0. 构建用户mongoose.schema
 *          1. 构建用户controllers | 操控数据库
 *              a) 注册用户
 *          2. 构建用户route
 *          3. 测试: postman
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
    },
});


const User = mongoose.model("users", userSchema);

module.exports = User;
