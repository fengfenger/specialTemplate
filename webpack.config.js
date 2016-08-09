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
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader')
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[ext]'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }]
    },
    babel: {
        presets: ["es2015", "stage-0"]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ]
}


// 判断环境
var prod = process.env.NODE_ENV === 'production';
console.log(prod);
module.exports.plugins = (module.exports.plugins || []);
if (prod) {
    module.exports.devtool = 'source-map';
    module.exports.plugins = module.exports.plugins.concat([
        // 借鉴vue官方的生成环境配置
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.BannerPlugin('vue')
    ]);
} else {
    module.exports.devtool = 'eval-source-map';
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
