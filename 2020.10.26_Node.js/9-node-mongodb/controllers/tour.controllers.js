const fs = require('fs');

const tour = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours.json`, 'utf-8'));

// 局部中间件: 提前处理错误逻辑( 完成笔记 )
//      a) 提出处理错误逻辑: 避免逐个的在接口逻辑中写入，处理错误逻辑，提高便捷性
exports.checkId = (req, res, next, value) => {
    console.log('局部中间件value', value);

    const id = value;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        return res.status(404).json({ // 核心
            status: 'fail',
            data: `Not find ${id} !`,
        });
    }

    next();
};

// Get: 返回所有的tour数据
exports.getAllTours = (req, res) => {
    console.log('返回所有的数据!');

    res.status(200).json({
        status: 'success',
        nowTime: req.nowTime,
        data: tour,
    });
};

// Get: 根据ID查询数据逻辑
exports.getItemTours = (req, res) => {
    console.log('响应逻辑req.params', req.params);

    const { id } = req.params;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        res.status(404).json({
            status: 'fail',
            data: 'Not find !',
        });
    }

    res.status(200).json({
        status: 'success',
        data: tourItem,
    });
};

// 构建: 指定路由api中间件，用于api的逻辑效验( 完成笔记 )
exports.checkToursBody = (req, res, next) => {
    // 用于测试 - 多中间件逻辑执行顺序
    console.log('效验: 局部中间件1');
    req.xx = 1;

    // 效验入参( 完成笔记 )
    const { name, array } = req.body;
    if (!name && array instanceof Array) {
        return res.status(400).json({ // 状态码400: 入参效验失败( 完成笔记 )
            status: 'fail',
            data: '入参错误!',
        });
    }

    next();
};

exports.checkToursBody2 = (req, res, next) => {
    console.log('效验: 局部中间件2', req.xx);
    next();
};

// Post: 增加数据逻辑
exports.getAddItemTours = (req, res) => {
    console.log('响应: 逻辑');

    const reqBody = req.body;
    const id = tour.length + 1;
    const newArray = [...tour];
    newArray.push({ _id: id, ...reqBody });

    fs.writeFile(`${__dirname}/../data/tours.json`, JSON.stringify(newArray), 'utf-8', (err) => {
        if (err) return console.log('err', err);

        res.status(201).json({
            status: 'successs',
            data: {
                newArray: newArray,
            },
        });
    });
};

// Patch: 数据更新逻辑
//      0. 注意: 只是模拟更新逻辑
//      1. 包类型: patch - 常用于更新数据逻辑
exports.updateItemTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: 'Update success !',
        },
    });
};

// Delete: 删除数据逻辑
//      0. 注意: 只是模拟更新逻辑
//      1. 包类型: delete - 常用于删除逻辑
exports.deleteItemTours = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null,
    });
};
