
/**
 * 简易的标准API逻辑模拟 | 有代码规范化 | 有高级路由 | 有数据结构规范化 ( 完成笔记 )
 * 
 *      a) 有数据结构规范化
 *          0. app.js
 *              a) 全局中间件
 *              b) 全局路由
 *          1. server.js
 *              a) 服务端配置
 *          2. controllers文件夹
 *              a) 根据局部路由/局部中间件写的响应逻辑
 *          3. routes文件夹
 *              a) 局部路由
 *              b) 局部中间件
 */

const express = require('express');
const morgan = require('morgan');

const userRoute = require('./routes/user.routes');
const tourRoute = require('./routes/tour.routes');

/**
 * 0. 全局中间件 - 区域:
 */
const app = express();

app.use( express.json() );

app.use( ( req, res, next ) => {
    console.log('全局中间件!');
    req.nowTime = new Date().toISOString();
    next();
} );

app.use( morgan('dev') );

/**
 * 1. 全局路由 - 区域:
 */
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/user", userRoute);

module.exports = app;
