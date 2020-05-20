const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin'); // 压缩JS文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 导出css为文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除指定目录
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html

/**
 * 生产模式: mode:'production'
 */
// 0. 不需要插件
    // a) terser-webpack-plugin:
        // 0. 作用: 压缩js文件
        // 1. 原因: webpack已自动包含压缩JS  
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve( __dirname, './dist' ),
        publicPath: '',
    },
    mode: 'production',
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
           }
        ]
    },
    plugins: [
        new TerserWebpackPlugin(), // 压缩JS，生产模式自动包含
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
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