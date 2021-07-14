const express = require("express");
const userControllers = require("../controllers/user.controllers");
const authControllers = require("../controllers/auth.controllers");

const router = express.Router();

// 忘记密码
router.route("/forgotpassword")
    .post(authControllers.forgotPassword);

// 令牌重置密码
router.route("/resetpassword/:resetTokenId")
    .post(authControllers.resetPassword);

// 登陆
router.route("/login")
    .post(authControllers.userLogIn);

// 注册
router.route("/sinup")
    .post(authControllers.userSinUp);



/**
 * 便捷式身份验证路由: route.use( 中间件 ) ( 等待笔记 )
 *      a) 影响范围: 代码下方路由将全部受影响，代码上方则不受影响
 *      b) 原因: 中间件也有执行顺序
 *      c) 可以删除下方路由多余身份验证中间件
 *      d) 解析: 下方相当于,叠加1层中间件
 *          0. authControllers.protect
 */
router.use(authControllers.protect);

// 注销用户
router.route("/deletecurrentuser")
    .post(authControllers.deleteCurrentUser);

// 更新当前用户个人信息路由
router.route("/updatecurrentuser")
    .post(authControllers.updateCurrentUser);

// 更新密码
router.route("/updatepassword")
    .post(authControllers.updatePassword);

/**
 * 创建: 获取当前用户信息API( 等待笔记 )
 *      a) 主要逻辑
 *          0. 保护路线: 目的是让req.user.id存在
 *          1. 中间件: 目的是将req.user.id传入req.params入参
 *          2. 查询逻辑: 有了id，可以直接使用通用型查询逻辑
 */
router.route("/me").get(userControllers.getMe, userControllers.findItemUser);


/**
 * 便捷式身份验证路由: 叠加权限认证route.use( 中间件 ) ( 等待笔记 )
 *      a) 影响范围: 代码下方路由将全部受影响，代码上方则不受影响
 *      b) 原因: 中间件也有执行顺序
 *      c) 可以删除下方路由多余身份验证中间件
 *      d) 解析: 下方相当于,叠加2层中间件
 *          0. authControllers.protect
 *          1. authControllers.restrictTo("admin")
 */
router.use(authControllers.restrictTo("admin"));

// 查看全部用户
router.route("/")
    .get(userControllers.getAllUser);

// 根据用户id，进行删修查
router.route("/:id")
    .get(userControllers.findItemUser)
    .patch(userControllers.updateItemUser)
    .delete(userControllers.deleteItemUser);

module.exports = router;
