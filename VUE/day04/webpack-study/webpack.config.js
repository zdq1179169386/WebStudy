const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry : path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename : 'bundle.js'
    },
    devserver : {
        open : true,//自动打开浏览器
        port: 3000,//设置运行时的端口
        contentBase:'src',//指定托管的根目录
        hot:true,//热更新
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin()
    ]
}