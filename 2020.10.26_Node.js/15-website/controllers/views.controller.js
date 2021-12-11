const Tour = require("../models/tour.models");
const catchAsync = require("../utils/catch-async.utils");

exports.getBase = (req, res) => {
    res.status(200).render("base", {
        test: "abc", // 传入变量
        title: "THE FOREST HIKER",
    });
};

/**
 * 服务端获取数据进行页面渲染: 实例1 ( 等待笔记 )
 * overview页面渲染接口
 */
exports.getOverview = catchAsync(async (req, res, next) => {
    // 获取tour数据
    const tours = await Tour.find();

    // 接口渲染
    res.status(200).render("overview", {
        title: "ALL TOUR",
        tours,
    });
});

/**
 * 服务端获取数据进行页面渲染: 实例2 ( 等待笔记 )
 * tour详情页面渲染接口
 *      a) 注意: 这里在中间件返回数据中增加了, 虚拟字段"slug", 其值与testMongooseMiddlewareSave相同
 */
exports.getTour = catchAsync(async (req, res, next) => {
    const { slug } = req.params;
    const tourItem = await Tour.findOne({
        testMongooseMiddlewareSave: slug,
    }).populate({
        path: "reviews",
        fields: "reviews rating user",
    });

    console.log(`tourItem`, tourItem);

    res.status(200).render("tour", {
        title: `${tourItem.name} Tour`,
        tourItem,
    });
});
