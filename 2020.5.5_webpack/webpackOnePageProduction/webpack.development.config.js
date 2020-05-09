const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除指定目录
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html

/**
 * 开发模式: mode:'development'
 */
// 0. 不需要插件
    // a) terser-webpack-plugin:
        // 0. 作用: 压缩js文件
        // 1. 原因: webpack已自动包含压缩JS  
    // b) xxx.[contenthash].xx:
        // 0. 作用: 生成以MD5哈希命名的文件
        // 1. 原因: 因为开发模式无需缓存机制
    // c) mini-css-extract-plugin:
        // 0. 作用: css代码导出为一个css文件
        // 1. 原因: 开发模式下无需生成实体文件
        // 2. 提示: 不要忘记将MiniCssExtractPlugin.loader替换回style-loader
// 1. 简化插件原因: 让webpack运行程序更迅速, 适应大型web项目
// 2. 自动监听 | 模拟服务器:
    // a) 安装: yarn add webpack-dev-server --save-dev
    // b) 配置: devServer
        // 0. contentBase: 设定根目录
        // 1. index: 设定主页
        // 2. port: 访问页面端口
    // c) 配置: package.json - "dev": "webpack-dev-server --config webpack.development.config.js --hot"
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, './dist' ),
        publicPath: '',
    },
    mode: 'development',
    devServer: {
      contentBase: path.resolve( __dirname, '/dist' ),  // 设定根目录
      index: 'index.html', // 主页
      port: 8080 // 访问页面端口
    },
    module: {
        rules: [
           {
               test: /\.(png|jpg)$/,
               use: [
                   'file-loader'
               ]
           },
           {
               test: /\.css$/,
               use: [
                   'style-loader','css-loader'
               ]
           },
           {
                test: /\.scss$/,
                use: [
                    'style-loader','css-loader','sass-loader'
                ]
           },
           {
               test: /\.js$/,
               use:{
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/env'],
                       plugins: ['transform-class-properties']
                   }
               }
           },
           {
               test: /\.hbs$/,
               use:[
                   'handlebars-loader'
               ]
           }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join( process.cwd(),'dist/**/*' ),
            ]
        }),
        new HtmlWebpackPlugin({
            title: '深入研究webpack',
            template: './src/index.hbs',
            description: '简述'
        })
    ]
}