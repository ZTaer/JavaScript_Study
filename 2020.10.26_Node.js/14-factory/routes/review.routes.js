
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

/**
 * 配合: 通用型创建逻辑路由( 等待笔记 )
 *      a) 注意: 中间件函数, 应用在路由 - handleApiSetCreateReviewId
 */
router.route("/")
    .get(handleApiGetAllReview)
    .post(authControllers.protect, authControllers.restrictTo("user"), handleApiSetCreateReviewId, handleApiCreateReview); // 创建评论，有严格的用户校验逻辑

/**
 * 配合: 通用型删除逻辑路由( 等待笔记 )
 * 配合: 通用型更新逻辑路由( 等待笔记 )

 */
router.route("/:id")
    // .get()
    // 改进中间件应用在路由 - handleApiSetCreateReviewId
    .patch(handleApiUpdateReview)
    .delete(handleApiDeleteReview);

module.exports = router;
