/**
 * 简易的标准API逻辑模拟 | 有代码规范化 | 有高级路由 | 无数据结构规范化 ( 完成笔记 )
 */

const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

/**
 * 0. 中间件区:
 */

const app = express();
app.use(express.json());

// a) 构建自己的中间件( 完成笔记 );
//      0. 注意: 根据理论中间件理论知识
//          a) 执行顺序: 在接口之前
//      1. 结束中间件执行: 必须要有next()函数执行
//      2. req入参: 中间件加工参数( 完成笔记 )
//          a) req.xxx: 增加req属性，方便在接口req.xxx调用
//      3. express函数文档: http://expressjs.com/en/4x/api.html
//      4. 中间件文档: http://expressjs.com/en/resources/middleware.html
app.use((req, res, next) => {
    console.log('初步构建自己的中间件!');

    // req入参: 中间件加工参数
    req.nowTime = new Date().toISOString(); // 字符串类型时间 | 字符串时间( 完成笔记 )

    next();
});

// b) 使用: 第三方中间件: morgan( 完成笔记 )
//      0. 安装: yarn add morgan
//      1. 作用: 渲染, 包日志, 提高开发便捷性, 也可以将信息写入日志文件
//      2. app.use( morgan( 'dev' ) ):
//          a) 例如: GET /XXXX 200 5.00ms - 8745
//          b) 解析: 包类型 路由 状态码 耗费时间 - 包的大小
app.use(morgan('dev'));

/**
 * 实验区: ( 切忽在生产环境使用 )
 */
const tour = JSON.parse(fs.readFileSync(`${__dirname}/data/tours.json`, 'utf-8'));

/**
 * 1. 逻辑区:
 */

// Get: 返回所有的tour数据
const getAllTours = (req, res) => {
    console.log('返回所有的数据!');

    res.status(200).json({
        status: 'success',
        nowTime: req.nowTime, // 访问中间件加工后的属性( 完成笔记 )
        data: tour,
    });
};

// Get: 根据ID查询数据逻辑
const getItemTours = (req, res) => {
    console.log('req.params', req.params);

    const { id } = req.params; // 获取url参数
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) { // 做错误逻辑 ( 注意: 要有错误逻辑 )
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

// Post: 增加数据逻辑
const getAddItemTours = (req, res) => {
    const reqBody = req.body;
    const id = tour.length + 1;
    const newArray = [...tour];
    newArray.push({ _id: id, ...reqBody });

    fs.writeFile(`${__dirname}/data/tours.json`, JSON.stringify(newArray), 'utf-8', (err) => {
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
const updateItemTours = (req, res) => {
    const { id } = req.params;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        res.status(404).json({
            status: 'fail',
            data: 'Update fail !',
        });
    }

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
const deleteItemTours = (req, res) => {
    const { id } = req.params;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        res.status(404).json({
            status: 'fail',
            data: 'Delete fail !',
        });
    }

    res.status(204).json({
        status: 'success',
        data: null,
    });
};

// user相关API模拟

const getAllUser = (req, res) => {
    console.log('返回所有的数据!');

    res.status(200).json({
        status: 'success',
        nowTime: req.nowTime,
        data: 'all user!',
    });
};

const getItemUser = (req, res) => {
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
        data: 'user item !',
    });
};

// Post: 增加数据逻辑
const createItemUser = (req, res) => {
    const { id } = req.params;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        res.status(404).json({
            status: 'fail',
            data: 'Create fail !',
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: 'Create user success !',
        },
    });
};

// Patch: 数据更新逻辑
const updateItemUser = (req, res) => {
    const { id } = req.params;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        res.status(404).json({
            status: 'fail',
            data: 'Update fail !',
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: 'Update user success !',
        },
    });
};

const deleteItemUser = (req, res) => {
    const { id } = req.params;
    const tourItem = tour.find((item) => item._id === id);

    if (!id || !tourItem) {
        res.status(404).json({
            status: 'fail',
            data: 'Delete fail !',
        });
    }

    res.status(204).json({
        status: 'success',
        data: null,
    });
};

/**
 * 2. 路由区:
 */

app.get('/', (req, res) => {
    res.send(' 规范化! ');
});

// a) 普通路由写法( 完成笔记 )
// app.get( "/api/v1/tours", getAllTours );
// app.post( "/api/v1/tours", getAddItemTours );
// app.get( "/api/v1/tours/:id", getItemTours );
// app.patch( "/api/v1/tours/:id", updateItemTours );
// app.delete( "/api/v1/tours/:id", deleteItemTours );

// b) 中级路由写法( 完成笔记 )
// app.route("/api/v1/tours")
//     .get(getAllTours)
//     .post(getAddItemTours);

// app.route("/api/v1/tours/:id")
//     .get(getItemTours)
//     .patch(updateItemTours)
//     .delete(deleteItemTours);

// app.route("/api/v1/user")
//     .get(getAllUser)
//     .post(createItemUser);

// app.route("/api/v1/user/:id")
//     .get(getItemUser)
//     .patch(updateItemUser)
//     .delete(deleteItemUser);

// c) 高级路由写法( 完成笔记 )
//      0. 核心: express.Router()
//      1. 配合: app.use()
const tourRoute = express.Router();
const userRoute = express.Router();

tourRoute.route('/')
    .get(getAllTours)
    .post(getAddItemTours);

tourRoute.route('/:id')
    .get(getItemTours)
    .patch(updateItemTours)
    .delete(deleteItemTours);

userRoute.route('/')
    .get(getAllUser)
    .post(createItemUser);

userRoute.route('/:id')
    .get(getItemUser)
    .patch(updateItemUser)
    .delete(deleteItemUser);

app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/user', userRoute);

/**
 * 3. 服务区:
 */

const port = 3000;
app.listen(port, () => {
    console.log('http://127.0.0.1:3000');
});
