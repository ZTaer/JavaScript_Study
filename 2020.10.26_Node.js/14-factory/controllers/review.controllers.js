/**
 * 构建: review.controller.js - 评论相关API逻辑 ( 完成笔记 )
 */

const Review = require("../models/review.models");
const catchAsync = require("../utils/catch-async.utils");
const Factory = require("./handle-factory-utils.controllers");
// const AppError = require("../utils/app-error.utils");


// 查询全部评论
/**
 * 查询全部评论: 配合express嵌套路由逻辑( 完成笔记 )
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

/**
 * 使用: 通用型创建逻辑，应用至，创建评论( 等待笔记 )
 *      a) 注意改进: 因有多余逻辑，不可直接使用通用逻辑，故将多余逻辑，应用至中间件函数
 */

// 创建中间件函数: 放置多余逻辑
exports.handleApiSetCreateReviewId = catchAsync(async (req, _res, next) => {
    const { tourId, userId } = req.body;
    if (!tourId) req.body.tourId = req.params.tourId; // post入参不存在tourId: 从url那入参
    if (!userId) req.body.userId = req.user.id; // post入参不存在userId: 从user中间件赋予的req.user.id那入参,
    next();
});

// 创建评论
exports.handleApiCreateReview = Factory.handleDataBaseAddOne(Review);

/**
 * 删除评论: 通用型删除逻辑( 等待笔记 )
 */
exports.handleApiDeleteReview = Factory.handleDataBaseDeleteOne(Review);


/**
 * 更新评论: 通用型更新逻辑( 等待笔记 )
 */
exports.handleApiUpdateReview = Factory.handleDataBaseUpdateOne(Review);
