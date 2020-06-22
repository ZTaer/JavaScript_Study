const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 复制文件目录，到指定目录下

module.exports = {
    entry: {
        'index': './src/index.js',
        'propages': './src/pages/propages/propages.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'./build'),
        publicPath: '',
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
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/images'
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,'css-loader','sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env','@babel/preset-react'],
                        plugins: ['transform-class-properties'],
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                exclude: /node_modules/,
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new TerserWebpackPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join( process.cwd(),'build/**/*' ),
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
            chunks: [ 'index' ], 
        }),
        new HtmlWebpackPlugin({
            filename: 'propages.html',
            template: './src/pages/propages/propages.html',
            chunks: [ 'propages' ], 
        })
    ]
}