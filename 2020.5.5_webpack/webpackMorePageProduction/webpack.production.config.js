const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin'); // 压缩JS文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 导出css为文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除指定目录
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html

/**
 * 生产模式: mode:'production'
 */
// 0. 多页面改进
    // a) entry: { 'xxx':'xx.js', 'yy':'yy.js' } 可以导入多个JS
    // b) [name]可动态命名:
        // 0. [name]可动态命名，根据是entry中的键值
        // 1. 修改位置: 
            // a) output: { filename: '[name].[contenthash].js' }
            // b) MiniCssExtractPlugin: { filename: '[name].[contenthash].css' }
    // c) optimization属性：代码拆分，依赖关系梳理
    // d) 多个实列化new HtmlWebpackPlugin代表生成多个页面
module.exports = {
    entry: {
        'index': './src/index.js',
        'proPages': './src/pages/proPages/pro.pages.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve( __dirname, './dist' ),
        publicPath: '',
    },
    mode: 'production',
    // webpack代码拆分( 完成笔记 )
        // 0. 目的: 梳理好依赖关系，避免第三方库的重复打包，导致文件增大
        // 1. 注意：HtmlWebpackPlugin下的chunks处，要手动添加，拆分后的库文件名称
    optimization: { 
        splitChunks: {
            chunks: 'all',

            // 自定义属性
            minSize: 10000, // >(大于)10kb文件封装进行，优化拆分( 默认为>30KB文件封装进化，优化拆分 )
            automaticNameDelimiter: '_' // 优化后生成的文件名称，间隔点，修改为下划线
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
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join( process.cwd(),'dist/**/*' ),
            ]
        }),
        // 多页面( 完成笔记 )
            // 0. 多个实列化new HtmlWebpackPlugin代表多个页面
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成的文件名称
            chunks: [ 'index','vendors_index_proPages' ], // 需要的JS，写入的为entry的键值
            title: '深入研究webpack',
            template: './src/index.hbs', // 模板外置
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