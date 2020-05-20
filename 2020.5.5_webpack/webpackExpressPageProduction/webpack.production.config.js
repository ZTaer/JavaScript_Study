const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin'); // 压缩JS文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 导出css为文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除指定目录
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html

/**
 * 生产模式: mode:'production'
 */
// 0. express配置: server.js
    // a) 修改publicPath: '/static/'
    // b) 目的与express.static配合，使页面可以访问外置附属文件，如img，css，js等
// 1. 字体文件引入配置

module.exports = {
    entry: {
        'index': './src/index.js',
        'proPages': './src/pages/proPages/pro.pages.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve( __dirname, './dist' ),
        publicPath: '/static/', // 0. "/static/"配合express
    },
    mode: 'production',
    optimization: { 
        splitChunks: {
            chunks: 'all',
            minSize: 10000, 
            automaticNameDelimiter: '_' 
        }
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
                   MiniCssExtractPlugin.loader,'css-loader'
               ]
           },
           {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,'css-loader','sass-loader'
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
           {                                  // 1. 字体抓取配置( 完成笔记 )
               test: /\.(ttf|woff|woff2)$/,         // a) 抓取文件类型( 为保证浏览器兼容性，我们需要同一种字体，需要3种格式 )
               use: {
                   loader: 'file-loader',           // b) 使用file-loader
                   options: {
                       name: '[name].[ext]',        // c) 生成原名称文件，[ext]: 为原文件格式
                       outputPath: 'fonts/'         // d) outputPath: 输出路径，在dist下输出的文件目录为/dist/fonts/
                   }
               }
           }
        ]
    },
    plugins: [
        new TerserWebpackPlugin(), // 压缩JS，生产模式自动包含
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join( process.cwd(),'dist/**/*' ),
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', 
            chunks: [ 'index','vendors_index_proPages' ], 
            title: '深入研究webpack',
            template: './src/index.hbs', 
            description: '简述'
        }),
        new HtmlWebpackPlugin({
            filename: 'proPages.html',
            chunks: [ 'proPages','vendors_index_proPages' ],
            title: '分页',
            template: './src/pages/proPages/proPages.hbs',
            description: '简述'
        })
    ]
}