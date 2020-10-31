/**
 * node.js获取第三方库写法( 完成笔记 )
 *      a) fs库：为读写文件的库
 *      b) http库: server相关
 */
const http = require("http");
const fs = require("fs");

/**
 * 0. 建立一个简单的server( 完成笔记 )
 * 1. 构建简易的路由( 完成笔记 )
 *      a) 注意: 生产环境使用express，当前为小测试故用基础函数来写路由
 * 2. http库: server相关库( 完成笔记 )
 *      a) 创建服务: http.createServer( ( req, res ) => {} )
 *          0. 回调函数:
 *              a) req: 接受类参数
 *                  0. req.url属性: 当前访问的url路径 
 *              b) res：发送类参数
 *                  0. res.end函数: 发送数据
 *                  1. res.writeHead函数: 改写"包头"
 *                      a) 模型: res.writeHead( "状态码",{ 改写属性 } )
 *                      b) 状态码:
 *                          0. 404: 包不存在
 *                          1. 200: 包正常
 *                      c) 改写属性相关:
 *                          0. "Content-type"指定发送数据类型:
 *                              a) 发送JSON数据: "Content-type": "application/json"
 *                              b) 发送的HTML数据:  "Content-type":"text/html"
 *      b) 监听端口服务: xxxServer.listen()
 *          0. 模型: xxxServer.listen( "监听的端口", "监听的IP地址", "监听时促发的回调函数" )
 *          1. 监听的ip地址: 127.0.0.1 - 代表监听本地
 * 3. 读取文件发送数据的二种写法( 完成笔记 )
 *      a) server下读取文件发送
 *          0. 异步读取JSON文件发送数据( 未优化写法 - 缺陷: 每一次访问API都要读取文件, 资源浪费 )
 *      b) server外读取文件发送
 *          1. server外非异步读取JSON文件发送数据( 优化写法 - 优点: 每一次访问API无需重复读取文件 )
 *          2. 注意: 数据直接在没有启动server前，写入非异步读取好文件，这样server用到时直接发送数据
 */

// a) server外非异步读取JSON文件发送数据( 优化写法 - 优点: 每一次访问API无需重复读取文件 ) 
const jsonData = fs.readFileSync( `${__dirname}/dev-data/data.json`,"utf-8" );

// b) 建立server
const server = http.createServer( ( req, res ) => {
    const pathUrl = req.url;                                        // req.url属性: 当前访问的url路径名称
    
    if( pathUrl === "/" ){
        res.end(`<h1>Hello World - Node.js Server - __OO7__<h1>`);  // res.end函数: 返回前端数据
    }else if ( pathUrl === "/pro" ){
        res.end(" this pro page ");
    }else if ( pathUrl === "/dataApi" ){
        // 异步读取JSON文件发送数据( 未优化写法 - 缺陷: 每一次访问API都要读取文件, 资源浪费 )
        fs.readFile( `${__dirname}/dev-data/data.json`,"utf-8",( err, data ) => {
            res.writeHead(200,{
                "Content-type": "application/json",
            });
            res.end( data );
        } );

    }
    else if ( pathUrl === "/newDataApi" ){
        // server外非异步读取JSON文件发送数据( 优化写法 - 优点: 每一次访问API无需重复读取文件 )
        //      a) 注意: 数据直接在没有启动server前，写入非异步读取好文件，这样server用到时直接发送数据
        res.writeHead(200,{
            "Content-type": "application/json",
        });
        res.end( jsonData );       
    }
    else{
        res.writeHead( 404, {                                       // res.writeHead函数: 自定义"包头"
            "Content-type":"text/html",
            "div-props": "xxx",
        });
        res.end(`<h1>404</h1>`);
    }

} );

// c) 监听指定端口，促发server
server.listen( 3000, "127.0.0.1", () => {
    console.log('监听端口3000');
} );
