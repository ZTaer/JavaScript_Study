
/**
 * 简单的node.js页面项目示例( 等待笔记 )
 *      a) 核心: 替换字段页面模板
 */

const http = require("http");
const fs = require("fs");
const url = require("url");


// 配合module.exports导入匿名函数使用( 等待笔记 )
const replaceTemplates = require("./module/replace-template.module");

/**
 * slugify库: 字符串加工库( 等待笔记 )
 *      a) 文档参考npm: https://www.npmjs.com/package/slugify
 */
const slugify = require("slugify");

// a) 获取数据
const proData = fs.readFileSync( `${__dirname}/dev-data/data.json`, "utf-8" );
const proDataObj = JSON.parse( proData );

// b) 获取h5模板
const over_templates = fs.readFileSync( `${__dirname}/templates/overview.templates.html`, "utf-8" );
const pro_templates = fs.readFileSync( `${__dirname}/templates/product.templates.html`, "utf-8" );
const proCard_templates = fs.readFileSync( `${__dirname}/templates/product-card.templates.html`, "utf-8" );

// c) 创建http服务
const server = http.createServer( ( req, res ) => {

    /**
     * url库：解析url内容( 等待笔记 )
     *      0. 导入: const url = require("url");
     *      1. url.parse: 解析url内容
     *          a) 模型:  url.parse( "访问的url", true )
     *          b) 返回对象参数:
     *              0. pathname属性: 当前url，不包含参数
     *              1. query属性: url中的参数，对象类型数据
     *          c) 例如: 
     *              0. url.parse( "/pro?id=1", true )
     *              1. { ...other, pathname: "/pro", query: { id: "1" } }
     */
    const { pathname, query } = url.parse( req.url, true );

    if( pathname === "/" || pathname === "/over" ){
        /**
         * 主页: 
         */
        // a) 构建迭代产品HTML
        const proCardHtml = proDataObj.map( itemData => replaceTemplates( proCard_templates, itemData ) ).join("");
        // b) 模板内容替换修改
        const output = over_templates.replace( "{%PRODUCT_CARDS%}", proCardHtml );

        res.writeHead( 200, {
            "Content-type": "text/html",
        } );
        res.end( output );

    }
    else if( pathname === "/pro" ) {
        /**
         * 产品详情页:
         */
        // a) 根据url参数查询数据
        const proItemData = proDataObj[ parseInt( query.id ? query.id : 0 ) ]
        // b) 模板内容替换修改
        const output = replaceTemplates( pro_templates, proItemData );

        res.writeHead( 200, {
            "Content-type": "text/html",
        } );
        res.end( output );       

    }
    else if( pathname === "/proData" ){
        /**
         * JSON数据:
         */
        res.writeHead( 200, {
            "Content-type": "application/json",
        } );
        res.end( proData );

    }
    else{
        /**
         * 404页面:
         */
        res.writeHead( 404, {
            "Content-type": "text/html",
        } );
        res.end(`<h1> 404 </h1>`);

    };

} );

// d) 监听端口
server.listen( 3000, "127.0.0.1", () => {
    console.log("http://localhost:3000/");
} );
