const path=require('path');
const HTMLWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports={
    entry: "./src/routing.js",
    devServer: {
        port:3006,
          historyApiFallback: true,
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },
    module:{
        rules:[
            {
                test:/\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                use:[
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
                template:"./src/index.html" 
                              
                              }),
		new CleanWebpackPlugin(),
		new webpack.ProgressPlugin(),
    ],
}