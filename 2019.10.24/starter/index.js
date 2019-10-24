/**
 * 基本操作( 等待笔记 ) 
    // 0. 本地手动运行js文件: node xx.js
    // 1. 自动运行js文件:
        a) 安装nodemon: npm install nodemon -g
        b) 启动nodemon: nodemon
    // 2. __dirname获取文件当前位置
        a) console.log( __dirname );
*/

// 请求fs操控文件模块
const fs = require('fs');

// 网络模块
const http = require('http');
const url = require('url');

// 读取文件
const mainJson = fs.readFileSync( `${__dirname}/data/data.json`, 'utf-8' );
// json格式转object格式
const mainDate = JSON.parse( mainJson );

// 创建路由
    // a) req: 为用户请求信息
    // b) res: 为服务器返回信息
const server = http.createServer( ( req, res ) => {

    // 获取URL链接
    console.log( req.url );
    
    // 创建返回包
        // a) .writeHead( 标识码, { 'Content-type', '文件类型;charset=编码格式' } )
            // 0. 200 - 访问正常
            // 1. 404 - 访问失败
        // b) .end( '返回内容' )
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
    res.end( ' 一切正常 ' );
} );

// 监听端口(test)
server.listen( 1337, '127.0.0.1', () => {
    console.log(' 正常监听端口 ');
} );

