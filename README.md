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