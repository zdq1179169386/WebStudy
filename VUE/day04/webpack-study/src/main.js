// 导入jQuery
// import ** from ** 是es6 语法
// npm view webpack versions 查看webpack 版本
// npm install --save-dev webpack 安装到项目根目录
// sudo npm uninstall webpack -g 卸载webpack
// sudo npm install webpack@3.6.0 -g  安装指定版本webpack
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','green')
    $('li:even').css('backgroundColor',function(){
        return 'pink'
    })
})

// 1， webpack 能处理js 之间的依赖关系
// 2， webpack 能够处理js 之间的兼容问题，把浏览器不能识别的高级语法转化成识别的


    // --port 3000 自定义短裤
