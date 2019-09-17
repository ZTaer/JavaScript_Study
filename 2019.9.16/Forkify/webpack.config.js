// 设定当前文件所在位置为根目录
const path = require('path');

// 此路径
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 切入点
        // a) 设定监控文件 ( "./"为当前目录的意思 )
        // b) 注意: 多js文件绑定时需 import/export配合
    entry: ['@babel/polyfill', './src/js/index.js'],
    
    // 输出点
        // a) path: 为设定生成路径
            // a) __dirname：为生成文件的设定的权限
            // b) ‘dist’: 为生成的js文件路径文件夹
        // b) filename: 生成路径文件名js/bundle.js
    output:{
        path: path.resolve( __dirname, 'dist' ),
        filename: 'js/bundle.js'    
    },

    // 设置动态监听目录与web-dev-server配合
        // 监听到js文件变动会直接显示在浏览器中
    devServer: {
        contentBase: './dist'
    },

    // 自动生成HTML与html-webpack-plugin配合
        // 自动生成HTML文件,并且自动添加js模块以及处理模块间的依赖关系
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })        
    ],

    // 配置babel
    module: {
        rules:[
            {
                test: /\.js$/, // 使用正则抓取JS文件
                exclude: /node_modules/, // 不包含抓取node_modules文件夹中的内容
                use: {
                    loader: 'babel-loader' // 使用babel-loader加载器
                }
           }
        ]
    },

};
