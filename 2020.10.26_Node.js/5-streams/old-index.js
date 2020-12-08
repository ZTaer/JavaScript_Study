
const http = require("http");
const fs = require('fs');
const url = require('url');

/**
 * 流: 实验 ( 取消笔记 )
 *      a) 发送数据的3种方式
 *      b) 方式一: 传统的fs读取文件发送( 文件较大时，不推荐使用 )
 *      c) 方式二: 流读取文件方式，并传输，源码
 *      d) 方式三: 最佳的流构建方式
 */

const server = http.createServer( ( req, res ) => {

    const { query, pathname } = url.parse( req.url, true );

    if( pathname === "/" ){
        res.writeHead( 200, {
            "Content-type": "text/html",
        } );
        res.end(`<h1>xxx</h1>`);
    }
    else if( pathname === "/stream1" ){
        /**
         * 方式一: 传统的fs读取文件发送( 文件较大时，不推荐使用 )
         */
        fs.readFile(`${__dirname}/txt/test.txt`, "utf-8" ,( err, data ) => {
            if( err ) console.log('err', err);
            res.writeHead( 200, {
                "Content-type":"text/html;charset=utf8"
            } );
            res.end(data);
        });

    }
    else if( pathname === "/stream2" ){
        /**
         * 方式二: 流读取文件方式，并传输，源码
         *      a) xxx.on("data",( chunk )=>{}): 数据流处理逻辑
         *      b) xxx.on("end",()=>{}): 数据流传输结束逻辑
         *      c) xxx.on("error",( error )=>{}): 读取失败逻辑
         *      d) 根据: 流程图，在非管道传输时，且是"可写流"即write()以及end()函数是非常重要的.
         */
        const testTxt = fs.createReadStream(`${__dirname}/txt/test.txt`);
        testTxt.on( "data", ( chunk ) => { 
            res.write( chunk ) 
        } );

        testTxt.on( "end", () => {
            res.end();
        } );

        testTxt.on( "error", ( err ) => {  
            res.statusCode(500);
            res.end("error");
        } );

    }
    else if( pathname === "/stream3" ){
        /**
         * 方式三: 最佳的流构建方式
         *      a) 注意: 推荐使用，并且无需xxx.on来处理事件，因为pipe将自动处理
         * 解决: 中文乱码问题 ( 取消笔记 - 核心 )
         *      a) 设定包头为utf8格式，防止乱码
         *      b) 源码: res.writeHeader(200,{"Content-type":"text/html;charset=utf8"})
         */
        const endText = fs.createReadStream(`${__dirname}/txt/test.txt`);
        res.writeHeader(200,{"Content-type":"text/html;charset=utf8"})
        endText.pipe(res);
    }
    else{
        res.writeHead( 404, {
            "Content-type": "text/html",
        } );
        res.end(`<h1> 404 </h1>`);
    };

});


server.listen( "3000", "127.0.0.1", () => {
    console.log("http://localhost:3000/");
} );