const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext]'
    },

    mode: 'development',

    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html'
        })
    ],

    devServer: {
        static: './dist'
    },

    module: {
        rules:[
            {
                test: /\.png$/,
                type: 'asset/resource',
                generator: {
                    filename: 'image/[contenthash][ext]'
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/inline'
            }
        ]
    }
}