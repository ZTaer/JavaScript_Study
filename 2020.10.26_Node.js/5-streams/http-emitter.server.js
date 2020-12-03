console.log('http-em');

/**
 * 观察者模式: 构建的http服务( 等待笔记 )
 *      0. 注意: 是一种新的写法，期区别在于，功能逻辑函数，并没写道回调函数内。
 *      1. http服务来源: const http = require('http'); 
 *      2. 核心: http库构建的server, 配合server.on()执行相关逻辑
 */

const http = require('http'); 
const url = require('url');

// a) 构建: http服务
const server = http.createServer();     // 注意: 不写回调函数，区别于传统写法，使用观察者模式

// b) server.on(): 响应逻辑类型( 等待笔记 )
//      0. "request"类型: 响应请求逻辑
//          a) 模型: server.on( "request", ( req, res ) => {} );
//          b) 应用: 主要应用于，响应请求服务相关逻辑
//      1. "close"类型: 响应关闭服务逻辑
//          a) 模型: server.on( "close", ( req, res ) => {} );
//          b) 应用: 主要应用于，关闭服务相关逻辑

server.on( "request", ( req, res ) => {
    const { pathname } = url.parse( req.url, true );
    console.log('pathname', pathname);

    res.end(" success !!! ");
} );

server.on( "request", ( req, res ) => {
    console.log(' 另外一个响应! ');
} );

server.on( "close", ( req, res ) => {
    console.log('close相管逻辑');
} );

server.listen( 3000, "127.0.0.1", () => {
    console.log("http://localhost:3000/");
} );