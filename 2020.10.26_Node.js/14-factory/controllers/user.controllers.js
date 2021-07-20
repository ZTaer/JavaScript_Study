const User = require("../models/user.models");
const Factory = require("./handle-factory-utils.controllers");

/**
 * 通用性逻辑应用tour( 完成笔记 )
 *      a) 注意: 针对嵌套路由，过滤特殊化处理
 *      b) 注意: 禁止使用更新接口更新用户密码
 */
exports.getAllUser = Factory.handleDataBaseFindAll(User); // 多功能查询
exports.updateItemUser = Factory.handleDataBaseUpdateOne(User); // 更新逻辑
exports.deleteItemUser = Factory.handleDataBaseDeleteOne(User); // 删除逻辑
exports.findItemUser = Factory.handleDataBaseFindOne(User); // 单个查询逻辑

/**
 * 配合: 获取当前用户信息API, 创建userId的中间件( 完成笔记 )
 *      a) 目的: 为构建当前用户信息api
 *      b) 作用: user id 存入api入参
 *      c) 注意: 中间件不需要catchAsync保护，否则将报错
 */
exports.getMe = (req, _res, next) => {
    req.params.id = req.user.id;
    next();
};
