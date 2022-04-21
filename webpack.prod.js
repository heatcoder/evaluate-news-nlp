// const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtraPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
                    test: /\.scss$/,
                    use: [ MiniCssExtraPlugin.loader, 'css-loader', 'sass-loader']
                }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename:"./index.html",
        }),

        new MiniCssExtraPlugin({filename: '[name].css'}),
    ]
}
