const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx', '.ts', '.tsx'],
        // In development mode that maps `react-pdf-viewer` packages with `../packages/PACKAGE_NAME/src`
        // we have to indicate the `react` path
        // Otherwise, we will see "Invalid hook call" error
        alias: {
            react: path.join(__dirname, '../node_modules/react'),
            'react-embed-pdf': path.join(__dirname, '../src'),
        },
    },
    devServer: {
        // Allow us to access the demo from the IP address
        // `http://IP_ADDRESS:8001`, `http://localhost:8001` work
        host: '0.0.0.0',
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 8001,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false,
        }),
    ],
};
