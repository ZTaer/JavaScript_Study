
const Review = require("../models/review.models");
const catchAsync = require("../utils/catch-async.utils");
const Factory = require("./handle-factory-utils.controllers");

/**
 * 通用性逻辑应用reviews( 等待笔记 )
 *      a) 注意: 多余逻辑放置中级件函数
 */

// 创建评论:中间件函数, 放置多余逻辑 ( 等待笔记 )
//    a) 原因: 因有多余逻辑，不可直接使用通用逻辑，故将多余逻辑，应用至中间件函数
exports.handleApiSetCreateReviewId = catchAsync(async (req, _res, next) => {
    const { tourId, userId } = req.body;
    if (!tourId) req.body.tourId = req.params.tourId; // post入参不存在tourId: 从url那入参
    if (!userId) req.body.userId = req.user.id; // post入参不存在userId: 从user中间件赋予的req.user.id那入参,
    next();
});
exports.handleApiCreateReview = Factory.handleDataBaseAddOne(Review); // 创建评论
exports.handleApiDeleteReview = Factory.handleDataBaseDeleteOne(Review); // 删除逻辑
exports.handleApiUpdateReview = Factory.handleDataBaseUpdateOne(Review); // 更新逻辑
exports.handleApiFindItemReview = Factory.handleDataBaseFindOne(Review); // 查询逻辑
exports.handleApiGetAllReview = Factory.handleDataBaseFindAll(Review); // 查询全部评论
