
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports   = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: './src/pages/home/index.jsx',
        vendors: ["react","react-dom","antd"]
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module:{
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']    
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.less','.scss','.css'],
        alias: {
            CommonComponent: path.resolve(__dirname,'src/components'),
        }
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Organic agricultural products',
            template: 'index.html'
        }),
    ],
    devServer:{
        port: 7888,
        historyApiFallback: true
    }
};