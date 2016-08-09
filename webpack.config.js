var webpack = require("webpack");
var path = require('path');
var fs = require('fs');


var HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// webpack扩展功能
var containerPath = path.resolve('./');

// 入口
module.exports = {
    entry: {
        index: './app/src/index.js',
    },
    output: {
        path: path.resolve(containerPath, './app/www/'),
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[name].[hash].js'
    },
    //babel重要的loader在这里
    module: {
        loaders: [{
            test: /.jade$/,
            loader: 'jade-loader',
            exclude: /(node_modules)/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader')
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[ext]'
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ]
}

//  处理html
var conf = {
    filename: 'index.html',
    template: './app/web/index.jade',
    inject: true,
    minify: {
        removeComments: true,
        collapseWhitespace: false
    },
    chunks: ['common', 'index'],
    hash: true,
}
 module.exports.plugins.push(new HtmlwebpackPlugin(conf));
