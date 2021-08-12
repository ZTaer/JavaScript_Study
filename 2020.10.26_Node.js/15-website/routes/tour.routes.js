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
    getTourWithin,
    getDistances,
} = require("../controllers/tour.controllers");
const authControllers = require("../controllers/auth.controllers");
const { handleApiCreateReview } = require("../controllers/review.controllers");
const reviewRoute = require("./review.routes");

const router = express.Router();

/**
 * tour: 给API接口身份认证和授权( 无需笔记 )
 *      a) 创建/修改/删除tour: 需要admin, lead-guide
 *      b) 查看年财报, 业务逻辑: 需要admin, lead-guide, guide
 */


/**
 * 聚合管道计算 | 业务逻辑实战模拟 ( 完成笔记 )
 */
router.route("/monthly-plan/:year")
    .get(authControllers.protect, authControllers.restrictTo("admin", "lead-guide", "guide"), getMonthlyPlan);

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

/**
 * 地理空间查询: 在半径范围内查询那些tour坐标在内( 完成笔记 )
 *      a) 路由解析:
 *          0. 第一种路由: "/tours-within/:distance/center/:lathing/unit/:unit" --> "/tours-within/300/center/12,23/unit/mi"
 *              a) distance: 距离
 *              b) lathing: 坐标
 *              c) unit: 单位 ( mi -> 英里 )
 *          1. 第二种路由: "/tours-within?distance=300&lathing=12,23&unit=mi"
 *      b) 实例: 查询半径400公里内的旅游
 *          0. 写法: /tours-within/400/center/34.72788297346316,-117.48336975190146/unit/mi
 */
router.route("/tours-within/:distance/center/:lathing/unit/:unit").get(getTourWithin);

/**
 * 地理空间聚合: 计算距离路由配置( 完成笔记 )
 *      a) 实例: 查询附近5000km内的tour
 *          0. 写法: /distances/34.72788297346316,-117.48336975190146/unit/km?maxDistance=5000
 */
router.route("/distances/:lathing/unit/:unit").get(getDistances);


router.route("/") // 高级API查询数据: 函数类型api
    .get(getAllTours)
    .post(authControllers.protect, authControllers.restrictTo("admin", "lead-guide"), checkToursBody, getAddItemTours); // 核心

router.route("/:id")
    .get(getItemTours)
    .patch(authControllers.protect, authControllers.restrictTo("admin", "lead-guide"), authControllers.protect, updateItemTours)
    .delete(authControllers.protect, authControllers.restrictTo("admin", "lead-guide"), deleteItemTours);


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
