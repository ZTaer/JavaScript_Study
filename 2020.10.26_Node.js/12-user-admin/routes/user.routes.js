const express = require("express");
const userControllers = require("../controllers/user.controllers");
const authControllers = require("../controllers/auth.controllers");

const router = express.Router();


/**
 * 构建: 重置/忘记密码路由 ( 等待笔记 )
 */
router.route("/forgotpassword")
    .post(authControllers.forgotPassword);

router.route("/resetPassword")
    .post(authControllers.resetPassword);

router.route("/login")
    .post(authControllers.userLogIn);

router.route("/sinup")
    .post(authControllers.userSinUp);

router.route("/")
    .get(authControllers.protect, userControllers.getAllUser);


router.route("/:id")
    .get(userControllers.getItemUser)
    .patch(userControllers.updateItemUser)
    // 权限验证中间件逻辑，使用位置( 等待笔记 )
    //      a) 目前逻辑: 仅限admin类型用户访问此路线
    .delete(authControllers.protect, authControllers.restrictTo("admin"), userControllers.deleteItemUser);

module.exports = router;
