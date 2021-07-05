const express = require("express");
const {
    getAllTours,
    getAllToursClass,
    getAddItemTours,
    getItemTours,
    aliasTopMiddlewareTours,
    updateItemTours,
    deleteItemTours,
    checkToursBody,
    getTourStats,
    getMonthlyPlan,
} = require("../controllers/tour.controllers");
const authControllers = require("../controllers/auth.controllers");
const { handleApiCreateReview } = require("../controllers/review.controllers");
const reviewRoute = require("./review.routes");

const router = express.Router();


/**
 * 聚合管道计算 | 业务逻辑实战模拟 ( 完成笔记 )
 */
router.route("/monthly-plan/:year")
    .get(getMonthlyPlan);

/**
 *  聚合管道计算 | 聚合管道查询,配置路由,方便测试API ( 完成笔记 )
 */
router.route("/get-tour-aggregate")
    .get(getTourStats);

/**
 * 业务路由 | 别名路由( 完成笔记 )
 *      0. 目的: 通常用于业务逻辑要求
 */
router.route("/top-5-cheap")
    .get(aliasTopMiddlewareTours, getAllTours);

router.route("/getClass") // 高级API查询数据: class类型api
    .get(getAllToursClass);

router.route("/") // 高级API查询数据: 函数类型api
    .get(getAllTours)
    .post(checkToursBody, getAddItemTours); // 核心

router.route("/:id")
    .get(getItemTours)
    .patch(updateItemTours)
    .delete(deleteItemTours);


/**
 * 简易的嵌套路由( 不推荐 - 完成笔记 )
 *      a) 嵌套路由示例:
 *          0. 提交tour评论url: POST /tour/xxxTourIdxxx/reviews
 *          1. 获取tour评论url:  GET /tour/xxxTourIdxxx/reviews
 *      b) 注意: 不推荐使用，此方法，express有更加便捷的方式，实现嵌套路由, 这里只是演示本质
 *      c) 目的: 方便获取所需入参, 适应多线路由的api逻辑
 */
router.route("/:tourId/reviews-sm").post(authControllers.protect, authControllers.restrictTo("user"), handleApiCreateReview);

/**
 * express嵌套路由( 推荐 - 完成笔记 )
 *      a) 目的: 代替简易的嵌套路由
 *      b) 嵌套路由示例:
 *          0. 提交tour评论url: POST /tour/xxxTourIdxxx/reviews
 *          1. 获取tour评论url:  GET /tour/xxxTourIdxxx/reviews
 *      c) 配置路由: 原理同app.js初始路由思路
 *      d) 注意: 配置mergeParams: true属性 ( 核心 )
 *          0. 目的: 当前路由，方便获取其他路由的入参 ( 核心 )
 */
router.use("/:tourId/reviews", reviewRoute);


module.exports = router;
