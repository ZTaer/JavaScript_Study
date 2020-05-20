const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除指定目录
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html

/**
 * 开发模式: mode:'development'
 */
// 0. 抓取字体即可，无需express的配合

module.exports = {
    entry: {
        "index": './src/index.js',
        "proPages": './src/pages/proPages/pro.pages.js',
    },
    output: {
        filename: '[name].bundle.js',
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
               test: /\.(png|jpg|gif)$/,
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
               exclude: /node_modules/,
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
           },
           {                                  
               test: /\.(ttf|woff|woff2)$/,        
               use: {
                   loader: 'file-loader',          
                   options: {
                       name: '[name].[ext]',       
                       outputPath: 'fonts/'        
                   }
               }
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
            filename: 'index.html',
            chunks: ['index'],
            title: '深入研究webpack',
            template: './src/index.hbs',
            description: '简述'
        }),
        new HtmlWebpackPlugin({
            filename:'proPages.html',
            chunks: ['proPages'],
            title: '深入研究webpack',
            template: './src/pages/proPages/proPages.hbs',
            description: '简述'
        })
    ]
}