const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 0.  根目录请求返回页面配置
app.get( '/', ( req, res ) => {   // 返回请求
    const pathHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const fromFileContent = fs.readFileSync( pathHtmlFile, 'utf-8' );   // fs.readFileSync( '路径','编码' )同步读取文件( 完成笔记 )
    res.send( fromFileContent );  // 将文件返回给请求者
} );
// a) 多页面请求返回配置
app.get( '/proPages', ( req, res ) => {   
    const pathHtmlFile = path.resolve(__dirname, '../dist/proPages.html');
    const fromFileContent = fs.readFileSync( pathHtmlFile, 'utf-8' );   
    res.send( fromFileContent );  
} );

// 1. 页面附属文件路径配置
    // a) 需要webpack的pathPublic="/static/"配合
app.use('/static', express.static( path.resolve(__dirname,'../dist') ) );

// 2. 监听开放端口配置
app.listen( 3000, () => {   // 监听端口
    console.log(' http://localhost:3000/ '); // 显示在node命令行的提示
} );