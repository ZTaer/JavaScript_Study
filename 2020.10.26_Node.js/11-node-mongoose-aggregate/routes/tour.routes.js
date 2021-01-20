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

const router = express.Router();


/**
 * 聚合管道计算 | 业务逻辑实战模拟 ( 等待笔记 )
 */
router.route("/monthly-plan/:year")
    .get(getMonthlyPlan);

/**
 *  聚合管道计算 | 聚合管道查询,配置路由,方便测试API ( 等待笔记 )
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



module.exports = router;
