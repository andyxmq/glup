
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devServerHost = '127.0.0.1';
const devServerPort = 7888;

module.exports   = {
    context: path.resolve(__dirname),
    devtool: 'source-map',
    entry: {
        main: "./src/app.js"
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: '[name].js',
        publicPath: `http://${devServerHost}:${devServerPort}/dist`
    },
    module:{
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname,'src'),
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },{
                test: /\.styl$/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            ServerConfigCenter: path.resolve(__dirname,'src/components/serverConfigCenter'),
            Views: path.resolve(__dirname, "src/views"),
            Layouts: path.resolve(__dirname, "src/layouts"),
            Routes: path.resolve(__dirname, "src/routes"),
            Service: path.resolve(__dirname, "src/service"),
            Utils: path.resolve(__dirname,"src/utils")
        }
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin()
        // new HtmlWebpackPlugin({
        //     title: 'Organic agricultural products',
        //     template: 'index.html'
        // }),
    ],
    devServer:{
        port: devServerPort,
        inline: true, //开启页面自动刷新
        hot: true,
        overlay: true,//开启浏览器上面显示错误
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
};

