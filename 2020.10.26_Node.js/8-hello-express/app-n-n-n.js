
/**
 * 简易的标准API逻辑模拟 | 无代码规范化 | 无高级路由 | 无数据结构规范化( 完成笔记 )
 */

const express = require('express');
const fs = require('fs');

const app = express();
app.use( express.json() );

/**
 * 读取文件( 实验环境 )
 */
const tour = JSON.parse( fs.readFileSync( `${__dirname}/data/tours.json`, "utf-8" ) );

app.get( "/", ( req, res ) => {
    res.send(" hellow express && node.js && mdb ");
} );

/**
 * 抓取URL的带的参数, 并做相关逻辑 | 抓取url参数 | 注意: 并非post参数 ( 完成笔记 )
 *      0. url带参方式:
 *          a) 多个带参,?为可选带参,
 *              0. 例如: app.get( "/api/v1/tours/:id/:x?", ( req, res ) => { req.params }
 *          b) 单个带参,
 *              0. 例如: app.get( "/api/v1/tours/:id", ( req, res ) => { req.params }
 *          c) 注意: 这种url带参方式，有一个就够了，在多不容易管控 
 *      1. 必备中间件: app.use( express.json() );
 *      2. 获取入参: req.params
 *          a) 格式: { id:xxxx, x:123 }
 */
// Get: 根据ID查询数据逻辑
app.get( "/api/v1/tours/:id", ( req, res ) => {
    console.log('req.params', req.params);

    const id = req.params.id;   // 获取url参数 
    const tourItem = tour.find( item => item._id === id );

    if( !id || !tourItem ){     // 做错误逻辑 ( 注意: 要有错误逻辑 )
        res.status(404).json({
            status: "fail",
            data: "Not find !",
        });
    }

    res.status(200).json({
        status: "success",
        data: tourItem,
    });
   
} );

/**
 * 简易的post响应流程 | 无数据库 ( 完成笔记 )
 */
 // Post: 增加数据逻辑
 app.post( "/api/v1/tours", ( req, res ) => {

    // 数据加工
    const reqBody = req.body;
    const id = tour.length + 1;
    const newArray = [ ...tour ];
    newArray.push( Object.assign( { _id: id }, reqBody ) );

    fs.writeFile( `${__dirname}/data/tours.json`, JSON.stringify(newArray), "utf-8", ( err ) => {
        // 失败逻辑: 响应的逻辑
        if( err ) return console.log('err', err);   

        // 成功逻辑: 则响应的数据/逻辑
        //      注意: 状态码201，在post响应返回数据使用
        res.status(201).json({
            status: "successs",
            data: {
                newArray: newArray
            }
        });

    }  );

} );


// Patch: 数据更新逻辑
//      0. 注意: 只是模拟更新逻辑
//      1. 包类型: patch - 常用于更新数据逻辑
app.patch( "/api/v1/tours/:id", ( req, res ) => {
    const id = req.params.id;   // 获取url参数 
    const tourItem = tour.find( item => item._id === id );

    if( !id || !tourItem ){     // 做错误逻辑 ( 注意: 要有错误逻辑 )
        res.status(404).json({
            status: "fail",
            data: "Update fail !",
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            tour: "Update success !"
        },
    });
} );

// Delete: 删除数据逻辑
//      0. 注意: 只是模拟更新逻辑
//      1. 包类型: delete - 常用于删除逻辑
// delete包类型逻辑，注意返回规范 ( 完成笔记 )
//      0. 规范一: 包状态码为204 - 代表无内容的意思
//      1. 规范二: 删除成功返回{ status: "success", data: null }
app.delete( "/api/v1/tours/:id", ( req, res ) => {
    const id = req.params.id;   // 获取url参数 
    const tourItem = tour.find( item => item._id === id );

    if( !id || !tourItem ){     // 做错误逻辑 ( 注意: 要有错误逻辑 )
        res.status(404).json({
            status: "fail",
            data: "Delete fail !",
        });
    }

    res.status(204).json({
        status: "success",
        data: null
    });
} );

const port = 3000;
app.listen( port, () => {
    console.log('http://127.0.0.1:3000');
} ) ;


