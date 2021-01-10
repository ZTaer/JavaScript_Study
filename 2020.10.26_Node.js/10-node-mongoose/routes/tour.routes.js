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
} = require("../controllers/tour.controllers");

const router = express.Router();

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
