
/**
 * 构建: review.controller.js: 评论相关API路由 ( 完成笔记 )
 */

const express = require("express");
const { handleApiGetAllReview, handleApiCreateReview } = require("../controllers/review.controllers");
const authControllers = require("../controllers/auth.controllers");


/**
 * 配合express嵌套路由( 完成笔记 )
 *      a) 目的: 当前路由，方便获取其他路由的入参 ( 核心 )
 *      b) 配置mergeParams: true属性
 *          0. 目的: 当前路由，方便获取其他路由的入参 ( 核心 )
 */
const router = express.Router({
    mergeParams: true, // 合并入参
});

router.route("/")
    .get(handleApiGetAllReview)
    .post(authControllers.protect, authControllers.restrictTo("user"), handleApiCreateReview); // 创建评论，有严格的用户校验逻辑

module.exports = router;
