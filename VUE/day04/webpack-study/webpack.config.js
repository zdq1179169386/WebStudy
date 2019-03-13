const path = require('path')
const webpack = require('webpack')
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
    entry : path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename : 'bundle.js'
    },
    // 第二种定义 webpack-dev-server 命令的方式
    devServer : {
        open : true,//自动打开浏览器
        port: 8000,//设置运行时的端口
        contentBase:'src',//指定托管的根目录
        hot:true,//热更新
    },
    // 配置插件的节点
    plugins:[
        // 热更新对象
      new webpack.HotModuleReplacementPlugin(),
    //   创建内存中html 文件的插件
      new htmlwebpackplugin({
          template: path.join(__dirname,'./src/index.html'),
          filename:'index.html'

      })
    ],
    // 配置第三方模块加载器
    module:{
        rules:[
            // 配置.css 的文件的第三方loader 规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            // 配置 .less 第三方loader 规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            // .sass 是第一个版本的，后升级改为 .scss
            // 配置.scss 类型
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}

        ]
    }
}

// webpack 处理第三方文件类型时：
// 1，当这个文件不是js，先去配置文件中找，有没有对应的第三方 loader 规则，如何找到，就用对应的loader 处理这种文件
// 2，调用loader 的顺序，是从后往前
// 当最后一个loader调用完毕之后，会把处理的结果交给wabpack，打包合并，最终输出到bundle.js中