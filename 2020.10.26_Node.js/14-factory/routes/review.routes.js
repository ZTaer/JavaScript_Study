
/**
 * 构建: review.controller.js: 评论相关API路由 ( 完成笔记 )
 */

const express = require("express");
const {
    handleApiGetAllReview,
    handleApiCreateReview,
    handleApiSetCreateReviewId,
    handleApiDeleteReview,
    handleApiUpdateReview,
    handleApiFindItemReview,
} = require("../controllers/review.controllers");
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

router.use(authControllers.protect);

/**
 * 配合: 通用型创建逻辑路由( 完成笔记 )
 *      a) 注意: 中间件函数, 应用在路由 - handleApiSetCreateReviewId
 */
router.route("/")
    .get(handleApiGetAllReview)
    .post(authControllers.restrictTo("user"), handleApiSetCreateReviewId, handleApiCreateReview); // 创建评论，有严格的用户校验逻辑

router.route("/:id")
    .get(handleApiFindItemReview)
    .patch(authControllers.restrictTo("admin", "user"), handleApiUpdateReview)
    .delete(authControllers.restrictTo("admin", "user"), handleApiDeleteReview);

module.exports = router;
