/**
 * 构建: review.controller.js - 评论相关API逻辑 ( 等待笔记 )
 */

const Review = require("../models/review.models");
const catchAsync = require("../utils/catch-async.utils");
// const AppError = require("../utils/app-error.utils");


// 查询全部评论
/**
 * 查询全部评论: 配合express嵌套路由逻辑( 等待笔记 )
 *      a) 改进:
 *          0. 适应不同路线那入参
 *              a) 从url那入参
 *              b) 从正常入参中那
 *              c) 目的: 适应多线路由的api逻辑
 *          1. 存在tourId,进行单个条件过滤查询
 *          2. 不存在tourId,则输出全部
 */
exports.handleApiGetAllReview = catchAsync(async (req, res, next) => {
    let findFilter = {};
    if (req.params.tourId) findFilter = { tourId: req.params.tourId }; // 过滤条件

    const reviews = await Review.find(findFilter).select("-__v");

    res.status(200).json({
        status: "success",
        result: reviews.length,
        data: {
            review: reviews,
        },
    });

    next();
});

// 创建评论
/**
 * 创建评论: 配合简易嵌套路由逻辑( 等待笔记 )
 *      a) 改进: 适应不同路线那入参
 *          0. 从url那入参
 *          1. 从正常入参中那
 *          2. 目的: 适应多线路由的api逻辑
 */
exports.handleApiCreateReview = catchAsync(async (req, res, next) => {
    const { tourId, userId } = req.body;
    if (!tourId) req.body.tourId = req.params.tourId; // post入参不存在tourId: 从url那入参
    if (!userId) req.body.userId = req.user.id; // post入参不存在userId: 从user中间件赋予的req.user.id那入参,

    const newReview = await Review.create(req.body);

    res.status(200).json({
        status: "success",
        data: {
            review: newReview,
        },
    });

    next();
});
