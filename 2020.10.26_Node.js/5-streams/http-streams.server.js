/**
 * 流: 实验 ( 等待笔记 )
 *      a) 发送数据的3种方式
 *      b) 方式一: 传统的fs读取文件发送( 文件较大时，不推荐使用 )
 *      c) 方式二: 流读取文件方式，并传输，源码
 *      d) 方式三: 最佳的流构建方式( 推荐使用 )
 */

 const http = require('http');
 const url = require('url');
 const fs = require('fs');
const { runInNewContext } = require('vm');

 const server = http.createServer();

 server.on( "request", ( req, res ) => {
    const { pathname } = url.parse( req.url );
    if( pathname === "/" ) {
        res.end(" success !! ");
    }

 } );

 server.on( "request", ( req, res ) => {
    const { pathname } = url.parse( req.url );
    if( pathname === "/s1" ) {
        /**
         * 方式一: 传统的fs读取文件发送( 文件较大时，不推荐使用 )
         */
        fs.readFile( `${__dirname}/txt/test.txt`,"utf-8",( error, data ) => {
            if(error) console.log('error', error);
            res.writeHead( 200, {
                "Content-type":"text/html;charset=utf8"
            } );
            res.end(data);
        } );    
    }

 } );

 server.on( "request", ( req, res ) => {
    const { pathname } = url.parse( req.url );
    if( pathname === "/s2" ){
        /**
         * 方式二: 流读取文件方式，并传输，源码
         *      a) xxx.on("data",( chunk )=>{}): 数据流处理逻辑
         *      b) xxx.on("end",()=>{}): 数据流传输结束逻辑
         *      c) xxx.on("error",( error )=>{}): 读取失败逻辑
         *      d) 根据: 流程图，在非管道传输时，且是"可写流"即write()以及end()函数是非常重要的.
         *      f) 核心加工者: write(), end()
         */
        const streamsData = fs.createReadStream(`${__dirname}/txt/test.txt`);
        res.writeHead( 200, {
            "Content-type":"text/html;charset=utf8"
        } );
        streamsData.on( "data", ( chunk ) => {
            res.write( chunk );
        } );
        streamsData.on( "end", () => {
            res.end();
        } );
        streamsData.on( "error", ( err ) => {
            res.statusCode(500);
            res.end("Error!!!",err);
        } );
    }
 } );

 server.on( "request", ( req, res ) => {
    const { pathname } = url.parse( req.url );
    if( pathname === "/s3" ){
        /**
         * 方式三: 最佳的流构建方式
         *      a) 注意: 推荐使用，并且无需xxx.on来处理事件，因为pipe将自动处理
         * 解决: 中文乱码问题 ( 等待笔记 - 核心 )
         *      a) 设定包头为utf8格式，防止乱码
         *      b) 源码: res.writeheader(200,{"content-type":"text/html;charset=utf8"})
         */
        const streamsData = fs.createReadStream(`${__dirname}/txt/test.txt`);
        res.writeHead( 200, {
            "Content-type":"text/html;charset=utf8"
        } );
        streamsData.pipe( res );
    }
 } );


 server.listen( 3000, "127.0.0.1", () => {
     console.log("http://locahost:3000/");
 } );