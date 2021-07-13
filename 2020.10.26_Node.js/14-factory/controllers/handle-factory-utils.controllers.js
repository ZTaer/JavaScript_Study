const catchAsync = require("../utils/catch-async.utils");
const AppError = require("../utils/app-error.utils");
const SearchUtils = require("../utils/search-feature-tour.utils");
/**
 * 主要: 通用性逻辑总结( 等待笔记 )
 *      a) 多功能查询全部
 *      b) 查询单个
 *      c) 创建单个
 *      d) 更新单个
 *      e) 删除单个
 */

/**
 * 构建: 通用型工厂函数, 删除逻辑( 等待笔记 )
 *      a) Model存放对应的文档
 *      b) 适用: review，tour项目，user
 */
// 删除: 指定id数据
exports.handleDataBaseDeleteOne = (Model) => catchAsync(async (req, res, next) => {
    const deleteModel = await Model.findByIdAndDelete(req.params.id);

    if (!deleteModel) {
        return next(new AppError("Not find this id!", 404));
    }

    res.status(204).json({
        status: "success",
        data: null,
    });
});

/**
 * 构建: 通用型工厂函数, 更新和创建逻辑( 等待笔记 )
 *      a) 适用: review，tour，user
 *      b) 注意: 要禁用敏感字段的更新
 *      c) 改进: 未来增加禁用更新字段入参 ( 未来改进 )
 */
// 更新: 指定id数据
exports.handleDataBaseUpdateOne = (Model) => catchAsync(async (req, res, next) => {
    // 敏感字段不允许更新
    if (req.body.password || req.body.role) {
        return next(new AppError("disable updates!", 400));
    }

    const updateModel = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // new属性: 代表确定要更新数据
        runValidators: true, // runValidators属性: 并且效验更新的数据
    });
    res.status(200).json({
        status: "success",
        data: updateModel,
    });
});

/**
 * 构建: 通用型创建逻辑( 等待笔记 )
 *      a) 适用: review，tour
 *      b) 注意: 多余逻辑，可单独创建一个中间件函数
 */
exports.handleDataBaseAddOne = (Model) => catchAsync(async (req, res, _next) => {
    const reqBody = req.body;
    const newModel = await Model.create(reqBody);

    res.status(200).json({
        status: "success",
        data: newModel,
    });
});

/**
 * 构建: 通用型单个查询逻辑，可以配置populate入参
 *      a) 适用: tour, user, reviews
 */
exports.handleDataBaseFindOne = (Model, populateOptions) => catchAsync(async (req, res, _next) => {
    const modelItem = await Model.findById(req.params.id).populate(populateOptions);

    if (modelItem === null) {
        throw new AppError("no data!", 404);
    }

    res.status(200).json({
        status: "success",
        data: modelItem,
    });
});

/**
 * 构建: 通用型多功能查询( 等待笔记 - 核心 )
 *      a) 适用: tour, user, reviews
 */
exports.handleDataBaseFindAll = (Model) => catchAsync(async (req, res, _next) => {
    // 针对reviews特殊处理( 可选 )
    //      a) 目的: 针对review嵌套在tour路由使用
    let findFilter = {};
    if (req.params.tourId) findFilter = { tourId: req.params.tourId }; // 过滤条件

    // 公共逻辑
    const featureClass = new SearchUtils(Model.find(findFilter), req.query)
        .filter()
        .sort() // 注意: new class后记得执行class中函数功能，否则功能将不起作用
        .fields()
        .page();
    const ModelData = await featureClass.query;

    res.status(200).json({
        status: "success",
        result: ModelData.length,
        data: {
            data: ModelData,
        },
    });
});

