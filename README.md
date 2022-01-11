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