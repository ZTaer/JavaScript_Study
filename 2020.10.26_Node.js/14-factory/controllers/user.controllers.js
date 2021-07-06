const fs = require("fs");
const catchAsync = require("../utils/catch-async.utils");
const User = require("../models/user.models");
const AppError = require("../utils/app-error.utils");
const Factory = require("./handle-factory-utils.controllers");

const tour = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours.json`, "utf-8"));

// user相关API模拟
exports.getAllUser = catchAsync(async (_req, res, next) => {
    const data = await User.find();
    if (!data) return next(new AppError("get all user error", 400));

    res.status(200).json({
        status: "success",
        results: data.length,
        data,
    });
});

/**
 * 使用: 通用型更新逻辑，应用至，更新用户信息( 等待笔记 )
 *      a) 注意: 禁止使用此接口更新用户密码
 */
exports.updateItemUser = Factory.handleDataBaseUpdateOne(User);

exports.deleteItemUser = Factory.handleDataBaseDeleteOne(User);
