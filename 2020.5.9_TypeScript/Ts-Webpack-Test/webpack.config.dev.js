const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/index.js',
        'propages': './src/pages/propages/propages.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: '',
    },
    mode: 'development',
    devServer: {
      contentBase: path.resolve( __dirname, '/dist' ),  // 设定根目录
      index: 'index.html', // 主页
      port: 8080, // 访问页面端口
      watchContentBase: true, // 监听目录下的文件是否变化以此刷新页面( 有时并不起作用 )
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {   // ts-loader配置( 等待笔记 )
                test:  /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        // 指定特定的ts编译配置，为了区分脚本的ts配置
                        configFile: path.resolve(__dirname, './tsconfig.json'),
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/fonts'
                    }
                }
            }

        ]
    },
    resolve: {  // webpack识别ts文件( 等待笔记 )
        extensions: [".ts",".js",".tsx"]
    },
    devtool: "inline-source-map",  // 在浏览器中方便查看ts文件( 等待笔记 )
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join( process.cwd(),'dist/**/*' ),
            ]
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname,'public/'),
                to: 'static',
            }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'propages.html',
            template: './src/pages/propages/propages.html',
            chunks: ['propages'],
        })
    ]
}