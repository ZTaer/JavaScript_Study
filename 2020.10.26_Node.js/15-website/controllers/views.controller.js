const Tour = require("../models/tour.models");
const catchAsync = require("../utils/catch-async.utils");

exports.getBase = (req, res) => {
    res.status(200).render("base", {
        test: "abc", // 传入变量
        title: "THE FOREST HIKER",
    });
};

/**
 * 服务端获取数据进行页面渲染: 实例1 ( 完成笔记 )
 * overview页面渲染接口
 */
exports.getOverview = catchAsync(async (req, res, next) => {
    // 获取tour数据
    const tours = await Tour.find();

    // 接口渲染
    res.status(200).render("overview", {
        title: "ALL TOUR",
        tours, // 传输给pug模板的数据，在pug可直接读取使用
    });
});

/**
 * 服务端获取数据进行页面渲染: 实例2 ( 完成笔记 )
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

/**
 * 配置登陆页面controllers ( 等待笔记 )
 */
exports.getLoginForm = catchAsync(async (req, res, next) => {
    res.status(200).render("login", { title: "登陆你的账号" });
});
