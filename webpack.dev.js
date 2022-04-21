const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/index.js',
    stats: 'normal',
    output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
             },
    module: {
        rules: [
                {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
            test: /\.(sa|sc|c)ss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader']
                }
               
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename:"./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
    })
    ]
}
