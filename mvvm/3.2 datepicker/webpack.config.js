const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html' //生成文件参照的模版也可以是其他文件
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename:'[id].css'
        })
    ],
    module: {
        rules: [
            {
                test:/.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']

            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:[{
                    loader:'file-loader',
                    options:{}
                }]
            },
            {
                test:/\.sass$/,
                use:[MiniCssExtractPlugin.loader,'sass-loader']

            },
            {
                test: /.san$/,
                use: 'san-loader'
            }
        ]
    },
    resolve:{
        modules:['node_modules'],
        extensions:['.san','.js','.css'],
        alias:{
            '@':path.join(__dirname,'')
        }
    }

}