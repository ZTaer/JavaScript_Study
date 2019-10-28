/**
 * 基本操作( 完成笔记 ) 
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
const laptopJson = fs.readFileSync( `${__dirname}/data/data.json`, 'utf-8' );
// json格式转object格式
const laptopDate = JSON.parse( laptopJson );

// 创建路由( 完成笔记 )
    // a) req: 为用户请求信息
    // b) res: 为服务器返回信息
const server = http.createServer( ( req, res ) => {

    // 获取URL链接( 完成笔记 )
        // 0. req.url如: 127.0.0.1:1337/test
            // a) 得: req.url == 'test'
        // 1. url.parse( req.url, true );解析url链接为对象
            // a) 解析完后会生成一个对象，对象里有很多参数，这个以后深入学习node.js会用到
            // b) .pathname: 访问的路径名称
            // c) .query:
                // 0. 链接: 127.0.0.1/laptop?id=123 -> 那么query的内容为 .query == { id: '123' }; 
                // 1. 其实 ?x=y 相当于创建对象 { x: y };
                // 2. ?x=y&?xx=yy 相当于创建对象 { x: y, xx: yy };
    const urlDate = url.parse( req.url, true );
    const pathName = urlDate.pathname; 
    const query = urlDate.query;
    const id = query.id;

    /**
     * 路由
     */
    if( pathName === '/pro' || pathName === '/' ){
        // 创建返回包( 完成笔记 )
            // a) .writeHead( 标识码, { 'Content-type', '文件类型;charset=编码格式' } )
                // 0. 200 - 访问正常
                // 1. 404 - 访问失败
            // b) .end( '返回内容' ), 只后命令将不在执行
        res.writeHead( 200, { 'Content-type': 'text/html;charset=utf-8' } );
        
        // 0. 读取card模板
        const card = fs.readFileSync(`${__dirname}/template-card.html`,'utf-8');
        // 1. 根据json文件生成电脑所有产品HTML模板
        let allProHTML = Array.from( laptopDate ).map( cur => {
            return replaceHTML( card, cur );
        } );
        allProHTML = allProHTML.join(' ');
        
        // 2. 渲染HMTL模板到产品页
        fs.readFile( `${__dirname}/template-overview.html`,'utf-8',( err, date ) => {
           const result = replaceHTML( date, allProHTML ); 
           res.end( result );        
        } );
    }
    else if( pathName === '/laptop' && id < laptopDate.length ){
        res.writeHead( 200, { 'Content-type': 'text/html;charset=utf-8' } );
        
        // node.js-本地读取文件关于.readFile()与.readFileSync()的区别( 完成笔记 )
            // 0. readFile()需要回调函数
                // a) .readFile( 路径, 编码, 函数 );
            // 1. readFileSync()无需回调函数
                // a) .readFileSync( 路径, 编码 );
        fs.readFile( `${__dirname}/template-laptop.html`,'utf-8',( err, date ) => {
            const laptop = laptopDate[id];
            const result = replaceHTML( date, laptop );
            res.end( result );
        } );
    }
    //  正则表达式显示图片
    else if( (/\.(jpg|jpeg|png|gif)$/i).test( pathName ) ){
        fs.readFile( `${__dirname}/data/img${pathName}`,( err, cur ) => {
            res.writeHead( 200, { 'Content-type': 'image/jpg' } );
            res.end( cur );
        } );
    }
    else{
        res.writeHead( 404, { 'Content-type': 'text/html;charset=utf-8' } );
        res.end( '访问失败' );
    }


} );


// 监听端口(test)
server.listen( 1337, '127.0.0.1', () => {
    console.log(' 正常监听端口 ');
} );


// 渲染模板函数 - 替换字符串
// .replace配合正则,替换字符串内容( 完成笔记 )
    // 正则匹配全文指定内容: /{%TEXT%}/g
function replaceHTML( modelHtml, data ){
    let result = modelHtml.replace( /{%PRICE%}/g, data.price );
    result = result.replace( /{%SCREEN%}/g, data.screen );
    result = result.replace( /{%PRODUCTNAME%}/g, data.productName );
    result = result.replace( /{%CPU%}/g, data.cpu );
    result = result.replace( /{%STORAGE%}/g, data.storage );
    result = result.replace( /{%RAM%}/g, data.ram );
    result = result.replace( /{%DESCRIPTION%}/g, data.description );
    result = result.replace( /{%ID%}/g, data.id );
    result = result.replace( /{%IMAGE%}/g, data.image );
    result = result.replace( /{%CARD%}/g, data );

    return result;
}