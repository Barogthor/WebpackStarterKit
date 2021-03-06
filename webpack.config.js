const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== "production";

let config = {
    entry: {bundle: "./src/index.js"},
    output: {
        path: path.resolve(__dirname, "assets"),
        publicPath: "/assets/",
        filename: "javascript/[name].js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,//, options: {
                            // hmr: devMode,
                            // publicPath:"../",
                            // reloadAll:true
                        // }},
                    "css-loader",
                    "sass-loader",
                    "postcss-loader",
                ]
            }
        ]
    },
    devServer: {
        contentBase: ["./public","./assets"],
        // historyApiFallback: true,
        open: true,
        hot: true,
        port: 8090
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'stylesheets/style.css',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: 'assets/index.html',
            filename: '../public/index.html'
        }),

    ],
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 1000
    }
}

module.exports = [config ];