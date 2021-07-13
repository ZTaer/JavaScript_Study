const catchAsync = require("../utils/catch-async.utils");
const User = require("../models/user.models");
const AppError = require("../utils/app-error.utils");
const Factory = require("./handle-factory-utils.controllers");

/**
 * 使用: 通用型多功能查询( 等待笔记 - 核心 )
 *      0. 注意: 针对嵌套路由，过滤特殊化处理
 */
// user相关API模拟
exports.getAllUser = Factory.handleDataBaseFindAll(User);

/**
 * 使用: 通用型更新逻辑，应用至，更新用户信息( 等待笔记 )
 *      a) 注意: 禁止使用此接口更新用户密码
 */
exports.updateItemUser = Factory.handleDataBaseUpdateOne(User);

exports.deleteItemUser = Factory.handleDataBaseDeleteOne(User);


/**
 * 使用: 通用型单个查询逻辑，查询指定id用户信息( 等待笔记 )
 */
exports.findItemUser = Factory.handleDataBaseFindOne(User);
