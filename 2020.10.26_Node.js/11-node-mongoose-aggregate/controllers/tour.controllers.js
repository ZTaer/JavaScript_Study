const Tour = require("../models/tour.models");
const SearchFeatureTour = require("../utils/search-feature-tour.utils");

// 局部中间件: 提前处理错误逻辑
exports.checkId = (req, res, next, value) => {
    next();
};

/**
 * 构建: 高级API查询数据 ( 完成笔记 )
 *      a) req.query: 拿取url入参
 *      b) 注意: 真的非常强大变态
 *      c) 构建步骤:
 *          0. 明确加工核心: 从Mongoose.Schema导入来的Tour
 *              a) 加工核心本质: let query = Tour.select().limit().skip().sort().find();
 *              b) 其实那么多逻辑: 都是微软着Mongoose.Schema传来的变量,进行加工
 *          1. 获取数据逻辑分离:
 *              a) 如下方: let query = Tour.xxx(); const TourData = await query;
 *          2. 分离字段 | 入参分离: 将功能入参,与,查询入参进行分离，方便逻辑加工
 *          3. 功能逻辑:
 *              a) 过滤数据: Model.prototype.find()
 *              b) 数据排序: Model.prototype.sort()
 *              c) 限制字段: Model.prototype.select()
 *              d) 分页: Model.prototype.skip().limit()
 *          4. url入参加工为Mongoose命令
 *              a) url入参细节:
 *                  0. 例如: 127.0.0.1:3000/api/v1/tours?difficulty=easy&duration[gte]=5
 *                  1. 读取后的入参: req.query === { difficulty: 'easy', duration: { gte: '5' } }
 * 运算符: delete运算符 - 删除指定对象数据 ( 完成笔记 )
 *      a) 例: a = { 'xxx':1, 'yyy':2 }; delete a['xxx'];
 *      b) 结果: a = { 'yyy':2 }
 */
exports.getAllTours = async (req, res) => {
    try {
        /**
         * 0. 加工入参
         */
        // a) 分离字段 ( 完成笔记 )
        //      0. 目的: 将功能字段与，查询字段进行分离，分开做逻辑，维护性更好
        const urlQuery = { ...req.query };
        const exdFiles = ["page", "limit", "sort", "fields"];
        exdFiles.forEach((cur) => delete urlQuery[cur]); // 目的: 将url入参加工，仅保留不存在于exdFiles中的字段

        // b) 加工查询命令 ( 完成笔记 - 非安全 )
        //      0. 正则: queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (cur) => `$${cur}`)
        //          a) 将字符串中: gte || gt || lte || lt 转换为 $gte || $gt || $lte || $lt
        //          b) 注意: 加工前要转JSON.stringify, 转换后转JSON.parse
        //      1. 加工前: { difficulty: 'easy', price: { lte: '1000' }, duration: { gte: '4' } }
        //      2. 加工后: { difficulty: 'easy', price: { '$lte': '1000' }, duration: { '$gte': '4' } }
        //      3. 目的: 通过url入参，加工成Mongoose运算符进行过滤数据 ( 核心 )
        let queryStr = JSON.stringify(urlQuery);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (cur) => `$${cur}`); // 目的: 替换字符串为指定字段: 如 gte --> $gte , 这样JSON.parse解析后可用在mongoose命令查询数据
        queryStr = JSON.parse(queryStr);

        console.log("exdFiles & urlQuery & queryStr ", exdFiles, urlQuery, queryStr);

        /**
         * 1. 数据库过滤
         */

        // a) 过滤查询数据: 方式一 ( 推荐 )
        let query = Tour.find(queryStr);

        // b) 数据排序 ( 完成笔记 )
        //      0. Model.prototype.sort(): 排序函数 ( 核心 )
        //      1. 单条件排序模型: query.sort( "-price" );
        //          a) 目的: 根据price字段排序数据，默认为'升序', 加'-'号为'降序'
        //      2. 多条件排序模型: query.sort( "price rating" );
        //          a) 目的: 优先根据price进行排序，在根据rating进行排序
        if (req.query.sort) {
            const sortStr = (req.query.sort).split(",").join(" ");
            console.log("~促发排序~", sortStr);
            query = query.sort(sortStr);
        } else {
            query = query.sort("-createdAt"); // 默认以创建数据的时间排序
        }

        // c) 限制字段 ( 完成笔记 )
        //      0. Model.prototype.select(): 限制字段函数 ( 核心 )
        //      1. 白名单模型: query.select("name price");
        //          a) 目的: 数据仅保留, name, price , _id字段
        //      2. 黑名单模型: query.select("-name -price");
        //          a) 目的: 数据其他正常, 不保留name, price字段数据 | 删除指定字段
        if (req.query.fields) {
            const fieldsStr = (req.query.fields).split(",").join(" ");
            console.log("~促发限制字段~", fieldsStr);
            query = query.select(fieldsStr);
        } else {
            query = query.select("-__v");
        }

        // d) 分页( 完成笔记 )
        //      0. 分页核心函数:
        //          a) Model.prototype.skip().limit(): 跳过数据函数, 配合, 限制数据函数, 达成分页目的
        //          b) 模型: query.skip(5).limit(5);
        //              0. 目的: 第二页 - 限制5条数据，跳过5条数据
        //      1. 设定默认页数( 骚逻辑 )
        //          a) 默认*1: 将String转为Number类型
        //          b) ||: 利用或运算符逻辑赋默认值
        //      2. 超出页面范围逻辑处理:
        //          a) Model.prototype.countDocuments(): 统计查询数据结果 ( 核心 )
        //          b) skip>=统计结果: 证明超出页面范围，则可以做超出范围逻辑
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 5;
        const skip = (page - 1) * limit; // 分页计算公式 ( 核心 )
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const queryResultNumber = await Tour.countDocuments();
            if (skip >= queryResultNumber) console.log("超出页面范围 - 做一些超出页面范围的逻辑");
        }

        const TourData = await query;
        // e) 过滤查询数据: 方式二 ( 完成笔记 - 某些情况会用到 - 等待研究 )
        //      0. .where: 对应字段
        //      1. .equals: 对应字段值
        //      2. 意思: Tour.find({ rating: 4.5, difficulty: "easy" });
        // const TourData = await Tour.find({})
        //     .where("rating")
        //     .equals(4.5)
        //     .where("difficulty")
        //     .equals("easy");

        /**
         * 2. 发送数据
         */

        res.status(200).json({
            status: "success",
            result: TourData.length,
            data: {
                tours: TourData,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            error: err,
        });
    }
};

/**
 * 构建controllers: Class方法高级API查询数据 ( 完成笔记 )
 *      a) 注意: new class后记得执行class中函数功能，否则功能将不起作用 ( 核心 )
 */
exports.getAllToursClass = async (req, res) => {
    try {
        const featureClass = new SearchFeatureTour(Tour.find(), req.query)
            .filter()
            .sort() // 注意: new class后记得执行class中函数功能，否则功能将不起作用
            .fields()
            .page();
        const TourData = await featureClass.query;

        res.status(200).json({
            status: "success",
            result: TourData.length,
            data: {
                tours: TourData,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            error: err,
        });
    }
};


// Get: 根据ID查询数据逻辑
exports.getItemTours = async (req, res) => {
    try {
        const tourItem = await Tour.findById(req.params.id);
        if (tourItem === null) throw "NoData!";
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

// Post逻辑: Post入参配合Mongoose.Schema添加数据到MongoDB数据库 ( 完成笔记 )
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
exports.updateItemTours = async (req, res) => {
    try {
        const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // new属性: 代表确定要更新数据
            runValidators: true, // runValidators属性: 并且效验更新的数据
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

/**
 * 业务中间件( 完成笔记 )
 *      a) 目的: 根据业务需求，主动增加响应入参，响应数据
*/
exports.aliasTopMiddlewareTours = async (req, res, next) => {
    req.query.limit = "5";
    req.query.sort = "-ratingsAverage,price";
    req.query.fields = "name,price,ratingsAverage,difficulty,summary";

    next();
};

/**
 * 聚合管道计算 | 聚合管道查询 ( 完成笔记 )
 *      a) 核心: model.prototype.aggregate([]);
 *      b) 聚合管道运算符:
 *          0. 主要功能类运算符
 *              a) $match: 查询过滤数据
 *              b) $group: 聚合查询过滤 | 包含数据分析 ( 核心 )
 *              c) $sort: 排序
 *          1. 计算类功能运算符
 *              a) $sum: 加法计算
 *              b) $avg: 平均值计算
 *              c) $min: 最小值
 *              d) $max: 最大值
 *              e) $ne: 不等于运算符，其match数据结果将不包含指定字段
 *          2. 加工型运算符
 *              a) $toUpper: 大写字母
 *      c) 注意: 聚合管道运算符可重复使用 ( 核心 )
 */
exports.getTourStats = async (req, res) => {
    try {
        const stats = await Tour.aggregate([
            {
                $match: { ratingsAverage: { $gte: 4.5 } },
            },
            {
                $group: {
                    // _id: "$ratingsAverage", // 数据分析: ( 核心 - 魔法级别 )
                    _id: { $toUpper: "$difficulty" }, // 数据分析: ( 核心 - 魔法级别 )
                    numTous: { $sum: 1 }, // 计算数据总数量
                    avgRating: { $avg: "$ratingsAverage" },
                    sumRatingsQuantity: { $sum: "$ratingsQuantity" },
                    avgPrice: { $avg: "$price" },
                    minPrice: { $min: "$price" },
                    maxPrice: { $max: "$price" },
                },
            },
            {
                $sort: {
                    avgRating: -1, // 根据'xxx'字段进行数据排序,1为升序,-1为降序
                },
            },
            { // 注意: 运算符可重复使用 ( 核心 )
                $match: {
                    _id: { $ne: "EASY" },
                },
            },
        ]);
        res.status(200).json({
            status: "success",
            data: {
                stats,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            error: err,
        });
    }
};

/**
 * 聚合管道计算 | 业务逻辑实战模拟 ( 完成笔记 )
 *      a) 业务目的: 算出那个月份，旅游团数量多
 *          0. name代表: 旅游团名称
 *      b) 聚合运算符:
 *          0. $unwind - 解构运算符: 通过解构指定字段数组，迭代出多条数据，方便进行数据分析
 *              a) 例: { name: 123, start: [1,2,3] }
 *                  0. 计算后: { name: 123, start: 1 },{ name: 123, start: 2 },{ name: 123, start: 3 }
 *          1. $month - 月份运算符，提取时间字段，月份，在进行$group数据分析
 *              a) 注意: 可以直接使用在new Date()数据字段内容中, 提取月份
 *          2. $push - 数组运算符: 构建数组类型数据，因为有多种旅游团
 *          3. $addFields - 增加字段
 *              a) 示例: { $addFields: { month: "$_id" } } ( 具体演示在下方代码 )
 *                  0. 目的: 这里是将_id值，赋给month字段
 *          4. $project - 删除指定字段
 *          5. $sort - 根据指定字段排序
 *          6. $limit - 限制数据量
 *      c) 时间相关运算符，官方文档: https://docs.mongodb.com/manual/reference/operator/aggregation/#date-expression-operators
 *      d) 多读读官方文档将掌握更多骚操作: https://docs.mongodb.com/manual/reference/operator/aggregation/
 * node.js接受入参总结: ( 完成笔记 )
 *      a) req.params - 接受路由入参:
 *          0. 路由: "/xxx/:year"
 *          1. 访问: "/xxx/2008"
 *          2. 接受的入参: { year: "2008" }
 *      b) req.body - 接受url入参
 *          0. 路由: "/xxx"
 *          1. 访问: "/xxx?test=123"
 *          2. 接受的入参: { test: "123" }
 *      c) req.query - 接受post入参
 */
exports.getMonthlyPlan = async (req, res) => {
    try {
        console.log("req.params", req.params, req.body, req.query);

        const year = req.params.year * 1;

        const plan = await Tour.aggregate([
            {
                $unwind: "$startDates",
            },
            {
                // $match: 范围性查询数据 | 时间范围查询数据 ( 完成笔记 )
                //      a) 目的: 查询本年度范围数据
                $match: {
                    startDates: {
                        $gte: new Date(`${year}-1-1`),
                        $lte: new Date(`${year}-12-30`),
                    },
                },
            },
            {
                $group: {
                    _id: { $month: "$startDates" }, // 根据'月份'进行数据分析
                    numTous: { $sum: 1 }, // 计算数据总数量
                    tours: { $push: "$name" }, // 将在当前月份，name字段存储在数组中
                },
            },
            {
                $addFields: { month: "$_id" }, // $addFields增加字段，这里是将_id值，赋给month字段
            },
            {
                $project: { // $project删除字段
                    _id: 0,
                },
            },
            {
                $sort: {
                    numTous: -1,
                },
            },
            {
                $limit: 5,
            },
        ]);

        res.status(200).json({
            status: "success",
            result: plan.length,
            data: {
                plan,
            },
        });
    } catch (err) {
        res.stats(404).json({
            status: "fail",
            error: err,
        });
    }
};
