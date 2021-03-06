# webpackLearn
learn
## 1.npx webpack 打包
webpack.config.js(entry,output,mode)
## 2.自动引入资源 - 插件
HtmlWebpackPlugin
npm install html-webpack-plugin --save-dev
plugins: [
    new HtmlWebpackPlugin()
]
## 3.每次打包都清理文件
在output里面添加
clean: true
## 4.代码调试
devtool: 'inline-source-map'
## 5.watch mode 监听模式
--watch
## 6.使用了webpack-dev-server
devServer: {
    static: './dist'
}
配置入口文件<br>
### webpack-dev-server 
没有输出任何的物理文件，把输出的打包的bundle.js文件放在了内存里面，提高开发效率和webpack编译效率
## 7.资源模块
### 1.asset/resource 他会发送一个单独的文件并导出URL
    module: {
        rules:[
            {
                test: /\.png$/,
                type: 'asset/resource',
                generator: {
                    filename: 'image/[contenthash][ext]'
                }
            }
        ]
    }
### 2.asset/inline 他会导出一个资源的 Data URL
    module: {
        rules: [
            {
                test: /\.svg$/,
                type: 'asset/inline'
            }
        ]
    }
### 3.asset/source 他会导出资源的源代码
    module: {
        rules: [
            {
                test: /\.txt$/,
                type: 'asset/source'
            }
        ]
    }
### 4.asset 他会在导出一个Data URL 和发送一个单独的文件之间自行选择 (图片比较小的话会自动打包成base64)
    module: {
        rules: [
            {
                test: /\.jpg$/,
                type: 'asset',
                // 当图片大小大于4M的时候生成一个图片资源文件
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024
                    }
                }
            }
        ]
    }
## 7.loader
    loader:是逆序加载的
    module: {
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
### 抽离和压缩css - mini-css-extract-plugin - css-minimizer-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html'
        }),
        // 实例化 MiniCssExtractPlugin
        new MiniCssExtractPlugin()
    ],  

     module: {
        rules: [
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },

    // 优化配置
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin()
        ]
    }
## 8.加载fonts字体
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            }
        ]
    }
## 9.加载数据 CSV,TSV,XML 用loader来处理 xml会转化成一个object,csv会转化成一个数组

    module: {
        rules: [
            {
                test: /\.(csv|tsv)$/,
                use: 'csv-loader'
            },
            {
                test: /\.xml$/,
                use: 'xml-loader'
            }
        ]
    }
    
## 10.自定义JSON模块parser npm i toml yaml json5 -D

    const toml = require('toml')
    const yaml = require('yaml')
    const json5 = require('json5')

    module: {
        rules: [
            {
                test: /\.toml$/,
                type: 'json',
                parser: {
                    parse: toml.parse
                }
            },
            {
                test: /\.yaml$/,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }
            },
            {
                test: /\.json5$/,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            }
        ]
    }
## 11.使用babel-loader npm install -D babel-loader @babel/core @babel/preset-env
 ### babel-loader:在webpack里应用babel解析es6的桥梁
 ### @babel/core:babel核心模块
 ### @babel/preset-env:babel预设，一组babel插件的集合
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // babel-loader 是有参数的，所以use是一个对象
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }