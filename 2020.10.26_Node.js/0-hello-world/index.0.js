/**
 * node.js获取第三方库写法( 完成笔记 )
 *      a) fs库：为读写文件的库
 */
const fs = require('fs');   

/**
 * 0. hello word 练习
 */
// const hello = " Hello World !!";
// console.log( hello );

/**
 * 1. fs库: 读写文件( 完成笔记 )
 *      a) 同步
 *          0. fs.readFileSync函数: 同步读取文件
 *              a) 模型: fs.readFileSync( "文件路径", "编码" )
 *          1. fs.writeFileSync函数: 同步写入文件
 *              a) 模型: fs.writeFileSync( "文件路径", "写入内容" )
 *      b) 非同步
 *          0. fs.readFile函数: 异步读取文件内容
 *              a) 模型: fs.readFile( "文件路径", "utf-8", "回调函数" )
 *          1. fs.writeFile函数: 异步书写内容
 *              a) 模型: fs.writeFile( "文件路径", "书写内容", "utf-8", "回调函数" );
 * 2. __dirname意思: 路径 - 当前目录下( 完成笔记 )
 *      a) 使用范围: 除require读取第三方库时不适用他, 其它关于路径的基本都使用他
 */

const textIn = fs.readFileSync( `${__dirname}/txt/input.txt`,"utf-8" ); // fs.readFileSync函数: 同步读取文件
console.log('textIn', textIn);

const textOut = `${textIn} \n--->写入文件时间: ${Date.now()}`;
fs.writeFileSync(`${__dirname}/txt/outInput.txt`,textOut);              // fs.writeFileSync函数: 同步写入文件

/**
 * 3. Node.js理论知识( 完成笔记 )
 *      a) Node.js的作用:
 *          0. 适合: 构建，视频网站，聊天工具, API交互web程序
            1. 不适合: 图像处理, 视频转换, 文件压缩
                a) 原因: 因为node.js社区没有相关开发
                b) 推荐: Python3
 *      b) 4个重要的概念:
 *          0. 同步( 阻塞代码 )
 *          1. 异步( 非阻塞代码 )   
 *          2. 阻塞: 影响性能
 *          3. 非阻塞: 性能良好，需要callBack写法
 *      c) I/O代表: 输入/输出
 *      d) node.js核心: 围绕着callBack来处理请求
 *          0. 注意: callBack写法 !== 一定是异步
 *          1. 回调地狱callBack Hell: 错误写法示例
 */

// a) 回调地狱写法示例( 注意: 切换在生产环境使用 )：异步读取文件/异步书写文件
//      0. 逻辑步骤: 
//          a) R - start.txt --> 
//          b) R - 以上一次读取内容为名字.txt --> 
//          c) R - append.txt --> 
//          d) W - final.txt - 读取文件的内容整和
fs.readFile( "./txt/start.txt","utf-8",( err, data )=>{
    fs.readFile( `./txt/${ data }.txt`, "utf-8", ( err, data_1 ) => {
        fs.readFile("./txt/append.txt", "utf-8", ( err, data_2 ) => {

            // fs.writeFile函数: 异步书写函数
            fs.writeFile(       
                "./txt/final.txt", 
                `${data_1}\n${data_2}\n书写时间: ${Date.now()}`, 
                "utf-8", 
                ( err ) => {
                console.log("书写完毕!");
            } );

        })
    } );
} );