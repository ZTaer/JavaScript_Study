const Tour = require("../models/tour.models");

// 局部中间件: 提前处理错误逻辑
exports.checkId = (req, res, next, value) => {
    next();
};

// Get: 返回所有的tour数据
// model.prototype.find({}): 查询文档所有的内容 | 查询数据库内容 ( 完成笔记 )
//      0. 注意: model.prototype.find({ mongodb运算符 }): 根据运算符,查询文档内容 | 查询数据库内容
exports.getAllTours = async (req, res) => {
    try {
        const TourData = await Tour.find({});
        res.status(200).json({
            status: "success",
            data: TourData,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            error: err,
        });
    }
};

// Get: 根据ID查询数据逻辑
// model.prototype.findById(id): 根据id查询文档内容 | 根据id查询数据库内容 ( 完成笔记 )
exports.getItemTours = async (req, res) => {
    try {
        const tourItem = await Tour.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: tourItem,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            error: err,
        });
    }
};

// 构建: 指定路由api中间件，用于api的逻辑效验
exports.checkToursBody = (req, res, next) => {
    next();
};


/**
 * Post逻辑: Post入参配合Mongoose.Schema添加数据到MongoDB数据库 ( 完成笔记 )
 *      a)  model.prototype.create(): 写入文档 | 写入数据至数据库
 *      b)  model.prototype.save(): 与create功能相似
 *      c)  注意: 返回错误信息，生产环境下不可模仿
 *      d)  Mongoose.Schemea具有强大的效验功能( 核心: 我喜欢 )
 */
exports.getAddItemTours = async (req, res) => {
    try {
        const reqBody = req.body;
        const newTour = await Tour.create(reqBody);
        res.status(200).json({
            status: "success",
            data: newTour,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            error: err,
        });
    }
};

// Patch: 数据更新逻辑
// model.prototype.findByIdAndUpdate( id, 更新内容, 属性配置 ): 根据id更新文档内容 | 根据id更新数据库内容 ( 完成笔记 )
//      a) 属性配置:、
//          0. new属性: 代表确定要更新数据
//          1. runvalidators属性: 并且效验更新的数据
exports.updateItemTours = async (req, res) => {
    try {
        const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // new属性: 代表确定要更新数据
            runValidators: true, // runvalidators属性: 并且效验更新的数据
        });
        res.status(200).json({
            status: "success",
            data: updateTour,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            error: err,
        });
    }
};

// Delete: 删除数据逻辑
// model.prototype.findByIdAndDelete( id ): 根据id删除文档内容 | 根据id删除数据库内容 ( 完成笔记 )
//      0. 注意: 状态码204, 不返回任何数据
exports.deleteItemTours = async (req, res) => {
    try {
        const deleteTour = await Tour.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: deleteTour,
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            error: err,
        });
    }
};
