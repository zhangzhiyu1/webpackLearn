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
        rules: [{
                test: /\.png$/,
                type: 'asset/resource',
                generator: {
                    filename: 'image/[contenthash][ext]'
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/inline'
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            },
            {
                test: /\.jpg$/,
                type: 'asset',
                // 当图片大小大于4M的时候生成一个图片资源文件
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024
                    }
                }
            },
            {
                test:/\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
}