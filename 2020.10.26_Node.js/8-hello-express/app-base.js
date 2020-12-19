/**
 * express 基础结构 | 初步安装练习 ( 完成笔记 )
 *      a) 安装: yarn add express
 *      b) 构建get接口
 *      c) 构建post接口
 *      d) res功能:
 *          0. .send("xxx"): 发送普通字符串数据
 *          1. .status(状态码): 设定状态码, 默认200
 *          2. .json(对象格式): 发送json格式数据类型
 *      e) 注意: API命名规范，注意版本命名
 *          0. 例如: /xxxx/v1/yyyy, /xxxx/v2/yyyy
 */

const express = require('express');

// 初始化express
const app = express();

/**
 * 使用express的中间件: ( 完成笔记 )
 *      a) 作用:
 *          0. 方便express加工，处理包的入参 | 传入的请求数据
 *          1. 也方便玩家调用数据
 *      b) POST获取入参:
 *          0. 注意: 配置完express的中间件才能起作用
 *          0. req.body: 入参数据
 */
app.use(express.json());

// 构建get接口
app.get('/', (req, res) => {
    res.send(' hellow express && node.js && mdb ');
});

app.get('/json/v1/test', (req, res) => {
    res
        .status(200)
        .json({
            test: "this is 'get' json data",
            status: true,
        });
});

// 构建post接口
app.post('/json/v1/test', (req, res) => {
    res
        .status(200)
        .json({
            test: "this is 'post' json data ",
            status: true,
            data: {
                reqBody: req.body,
            },
        });

    console.log('req.body | POST接受到的入参', req.body); // 注意: 配置完express的中间件才能起作用
});

// 监听本地端口3000
const port = 3000;
app.listen(port, () => {
    console.log('http://127.0.0.1:3000');
});
