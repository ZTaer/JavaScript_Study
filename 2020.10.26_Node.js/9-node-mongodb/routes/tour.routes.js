const express = require('express');
const {
    checkId,
    getAllTours,
    getAddItemTours,
    getItemTours,
    updateItemTours,
    deleteItemTours,
    checkToursBody,
    checkToursBody2,
} = require('../controllers/tour.controllers');

/**
 * 局部路由 - 配合规范的数据结构( 完成笔记 )
 */

const router = express.Router();

/**
 * 局部中间件( 完成笔记 )
 *      0. 中间件: const router = express.Router();
 *      1. router.param(): 解析url入参的中间件，方便根据url入参做一些，中间件逻辑
 *      2. 注意: 仅在指定url起作用的'中间件' ( 非常棒 )
 *      3. 作用:
 *          a) 做错误处理: 如查询id数据是否存在，以此提前做出处理错误逻辑
 */
router.param('id', checkId);


// 多中间件写法作用: ( 完成笔记 )
//      0. 验证用户是否登陆
//      1. 效验入参是否正确
//      2. 验证用户权限是否达标
// 构建: 指定路由api中间件，用于api的逻辑效验 ( 完成笔记 )
router.route('/')
    .get(getAllTours)
    .post(checkToursBody, checkToursBody2, getAddItemTours); // 核心

router.route('/:id')
    .get(getItemTours)
    .patch(updateItemTours)
    .delete(deleteItemTours);

module.exports = router;
