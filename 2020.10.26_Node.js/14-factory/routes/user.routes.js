const express = require("express");
const userControllers = require("../controllers/user.controllers");
const authControllers = require("../controllers/auth.controllers");

const router = express.Router();

/**
 * 构建: 注销用户
 */
router.route("/deletecurrentuser")
    .post(authControllers.protect, authControllers.deleteCurrentUser);

/**
 * 构建: 更新当前用户个人信息路由
 */
router.route("/updatecurrentuser")
    .post(authControllers.protect, authControllers.updateCurrentUser);


/**
 * 构建: 更新当前用户密码: 验证当前密码正确性, 在修改密码 ( 不通过邮箱修改密码 - 完成笔记 )
 */
router.route("/updatepassword")
    .post(authControllers.protect, authControllers.updatePassword);

/**
 * 构建: 重置/忘记密码路由 ( 完成笔记 )
 */
router.route("/forgotpassword")
    .post(authControllers.forgotPassword);

router.route("/resetpassword/:resetTokenId")
    .post(authControllers.resetPassword);

router.route("/login")
    .post(authControllers.userLogIn);

router.route("/sinup")
    .post(authControllers.userSinUp);

router.route("/")
    .get(authControllers.protect, userControllers.getAllUser);


router.route("/:id")
    // .get(userControllers.getItemUser)
    .patch(userControllers.updateItemUser)
    .delete(authControllers.protect, authControllers.restrictTo("admin"), userControllers.deleteItemUser);

module.exports = router;
