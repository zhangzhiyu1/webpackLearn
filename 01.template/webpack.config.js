const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

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
        }),
        // 实例化 MiniCssExtractPlugin
        new MiniCssExtractPlugin({
            filename: 'style/[contenthash].css'
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/,
                use: 'csv-loader'
            },
            {
                test: /\.xml$/,
                use: 'xml-loader'
            }
        ]
    },

    // 优化配置
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin()
        ]
    }
}