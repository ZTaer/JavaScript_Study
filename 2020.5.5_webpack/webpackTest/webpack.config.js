/**
 * path: node中路径模块必备
 */
// 0. node.js 路径模块必备，
// 1. 同时require('xxx')是node引用模块的方法，就像import xxx from 'xxx';
const path = require('path'); 
const TerserPlugin = require('terser-webpack-plugin');              // 压缩文件插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');    // 将css或者scss导出为一个css文件中
const { CleanWebpackPlugin } = require('clean-webpack-plugin');     // 清除指定目录文件
const HtmlWebpackPlugin = require('html-webpack-plugin');           // 生成HTML文件

/**
 * webpack配置详情( 完成笔记 )
 */
// 0. 基本配置: 输入，输出
    // a) xxx.[contenthash].js/xxx.[contenthash].css
        // 0. 作用：生成以MD5哈希命名的文件
        // 1. 目的: 是为了缓存机制，缓存机制请看最下方
// 1. Loader: 配置sass，配置css，配置图片，配置Babel，hbs模板引擎
// 2. Plugins: 压缩JS插件，集中css导出成文件插件，清除目录插件，生成html插件
// 3. mode：可以表明开发版本和生产版本的状态，并根据不同模式做一些内置优化
    // a) 
module.exports = {                                // 0. 用于接受webpack配置信息
    entry: './src/index.js',                      // 1. 切入口: 加工文件
    output: {                                     // 2. 输出口: 输出加工后的文件
        filename: 'bundle.[contenthash].js',         // a) 生成的文件名称
        path: path.resolve( __dirname, './dist' ),   // b) 生成的文件位置 - 当前目录下的dist目录
        publicPath: ''                               // c) publicPath('本地路径/URL路径')设定外置文件生成位置( 如: 图片,xml等文件 - 默认为"path"的位置 )
    },
    mode: 'none',                                 // 3. 选择模式:
                                                     // a) mode: 'none'无模式
                                                     // b) mode: 'production'生产模式，能进行基本的代码格式压缩
                                                     // c) mode: 'development'开发模式
// 4. 模块
// a) Loader: 目的是让非JS文件也可以import到JS文件中使用
// b) rules的作用: 配置loader可以让指定文件类型在import到JS文件中正常使用
//      0. 结构rules: [ { 正则,Loader }, { 正则,Loader } ] 
    module: {                                     
        rules: [    
            /*                            
            {                                     // c) 让JS文件可以导入XML文件
                test: /\.(xml)$/,                     // 0. 正则抓取xml文件
                use: [                               // 1. 需要Loader支持: yarn add xml-loader
                    'xml-loader'                    
                ] 
            },
            */
            {                                     // d) 让JS文件可以导入图片文件
               test: /\.(png|jpg)$/,                 // 0. 正则抓取图片文件 
               use: [                                // 1. 需要Loader支持: yarn add file-loader
                   'file-loader'                    
               ]
            },
                {                                 // e) 让JS文件可以导入css文件 
                    test: /\.css$/,                  // 0. 正则抓取css文件
                use: [                               // 1. 需要Loader支持: yarn add style-loader css-loader --save-dev
                    MiniCssExtractPlugin.loader,'css-loader'         // a) style-loader: 保证css导入到HTML正常
                ]                                       // b) css-loader: 保证css导入到JS正常
                                                     // 2. 注意: style-loader替换为MiniCssExtractPlugin.loader，为配合css导出成文件
            },
            {                                     // f) 让JS文件可以导入scss文件 
                test: /\.scss$/,                     // 0. 正则抓取scss文件
                use: [                               // 1. 需要Loader支持: yarn add sass-loader node-sass --save-dev
                                                     // 2. 注意: 注意Loader的顺序，从右向左，style-loader替换为MiniCssExtractPlugin.loader，为配合css导出成文件
                    MiniCssExtractPlugin.loader,'css-loader','sass-loader'         
                ]                                       
            },
            {                                     // g) 配置Babel，新版本JS语法转老版本JS语法
                test: /\.js$/,                       // 0. 正则抓取JS文件
                exclude: /node_modules/,             // 1. 不抓取根目录下的node_modules目录
                use: {
                    loader: 'babel-loader',          // 2. 需要Loader支持: yarn add @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties --save-dev 
                    options: {                       // 3. 额外参数配置:
                        presets: [ '@babel/env' ],      // a) 预设: babel环境参数
                        plugins: [ 'transform-class-properties' ] // b) 插件: 需要transform-class-properties库将ES6的class转变为ES5语法
                    }
                }
            },
            {                                     // h) HBS | handlebars模板引擎
                test: /\.hbs$/,                      // 0. 作用: 正则抓取hbs文件  
                                                     // 1. 目的: 配合htmlWebpackPlugin生成html文件
                use: [                               // 2. 需要Loader支持:  
                    'handlebars-loader'                 // a) yarn add handlebars-loader --save-dev
                ]                                       // b) yarn add handlebars --save ( 注意安装到全局 )
            }                                        
        ]
    },

// 5. 插件
// a) plugins: [ new xxx, new xxx ]用于放置第三方插件配置
// b) TerserPlugin: 压缩JS文件插件,让生成的文件变小
   // 0. 安装: yarn add terser-webpack-plugin --save-dev
   // 1. 导入: const TerserPlugin = require('terser-webpack-plugin') - 切忌需要导入组件
// c) MiniCssExtractPlugin: 将全局css代码导出成为文件
   // 0. 安装: yarn add mini-css-extract-plugin --save-dev
   // 1. 导入: const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// d) CleanWebpackPlugin: 清除所有"导出路径"的目录文件,目的是生成的新文件替换老文件
   // 0. 安装: yarn add clean-webpack-plugin --save-dev
   // 1. 导入: const { CleanWebpackPlugin } = require('clean-webpack-plugin');
   // 2. 默认删除"导出路径"文件目录: CleanWebpackPlugin()
   // 3. cleanOnceBeforeBuildPatterns: [ 绝对路径,绝对路径 ]，指定绝对路径删除文件
        // a) 解析: path.join( process.cwd(), 'build/**/*' )
            // 0. 字符标识: "**/*": 删除所有文件
            // 1. path.join( A,B ): A+B路径拼接
            // 2. process.cwd(): 获取绝对路径
// e) HtmlWebpackPlugin: 生成html文件
   // 0. 安装: yarn add html-webpack-plugin --save-dev
   // 1. 导入: const HtmlWebpackPlugin = require('html-webpack-plugin');
   // 2. publicPath('路径'): 路径会影响html获取文件的路径,建议为pulicPath('')
   // 3. plugins配置:
      // a) 默认生成html到path: new HtmlWebpackPlugin();
      // b) HBS | handlebars模板引擎生成HTML:
         // 0. 插件xxx.hbs文件，使用相应hbs变量添加到html中
         // 1. HtmlWebpackPlugin的plugin配置 - 观下方
         // 2. HBS的loader配置 - 观上方
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css' // 自定义生成文件的名称
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join( process.cwd(), 'dist/**/*' ),
                path.join( process.cwd(), 'build/**/*' )
            ]
        }),
        new HtmlWebpackPlugin({
            title: '深入研究webpack',
            template: './src/index.hbs',
            description: '由hbs配合html-webpack-plugin生成'
        })
    ]
};


/**
 * 当前缓存机制
 */
// 0. 核心机制: 文件缓存到浏览器，若文件名称发生改变，在获取新文件，以此保证JS文件更新迭代以及缓存。
    // a) 文件内容发生改变：则文件名称改变
    // b) 文件内容不发生改变：则文件名称不变
    // c) 改变名称的核心: MD5哈希值
// 1. MD5哈希: xxx.[contenthash].js/xxx.[contenthash].css
    // a) 作用：生成以MD5哈希命名的文件
    // b) 目的: 是为了缓存机制，缓存机制请看最下方 
// 2. 插件: clean-webpack-plugin
    // a) CleanWebpackPlugin函数
        // 0. 作用: 配合清除指定目录文件
        // 1. 目的: 新文件替换老文件