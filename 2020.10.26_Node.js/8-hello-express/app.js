/**
 * express 基础结构 | 初步安装练习 ( 等待笔记 )
 *      a) 安装: yarn add express
 *      b) 构建get接口
 *      c) 构建post接口
 *      d) res功能:
 *          0. .send("xxx"): 发送普通字符串数据
 *          1. .status(状态码): 设定状态码, 默认200
 *          2. .json(对象格式): 发送json格式数据类型
 */

const express = require('express');

// a) 初始化express
const app = express();

// c) 构建get接口
app.get( "/", ( req, res ) => {
    res.send(" hellow express && node.js && mdb ");
} );

app.get( "/json", ( req, res ) => {
    res
    .status(200)
    .json({
        test: "this is 'get' json data",
        status: true
    });
} );

// d) 构建post接口
app.post( "/json", ( req, res ) => {
    res
    .status(200)
    .json({
        test: "this is 'post' json data ",
        status: true
    });
} );

// b) 监听本地端口3000
const port = 3000;
app.listen( port, () => {
    console.log('http://127.0.0.1:3000');
} ) ;
