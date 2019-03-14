// 导入jQuery
// import ** from ** 是es6 语法
// 安装webpack ： sudo npm i webpack@3.6.0 -g --unsafe-perm 
// npm view webpack versions 查看webpack 版本
// npm info webpack 查看本地webpack 版本
// npm install --save-dev webpack 安装到项目根目录
// sudo npm uninstall webpack -g 卸载webpack
// sudo npm install webpack@3.6.0 -g  安装指定版本webpack

// npm i jquery --save 安装jQuery

// webpack 和 webpack-dev-server 版本有很多问题
// 这里全局的webpack 是3.6.0，项目根目录下 的是3.8.1

import $ from 'jquery'
// 使用 import 语法，导入 CSS样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 高版本的 bootstrap 中没有字体文件
import 'bootstrap/dist/css/bootstrap.css'

$(function () {
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', function () {
        return 'pink'
    })
})

class Person {
    static info = {
        name: 'zdq'
    }
}

console.log(Person.info);



// 1， webpack 能处理js 之间的依赖关系
// 2， webpack 能够处理js 之间的兼容问题，把浏览器不能识别的高级语法转化成识别的


// --port 3000 自定义端口


/*
    npm i module_name  -S  = >  npm install module_name --save    写入到 dependencies 对象

npm i module_name  -D  => npm install module_name --save-dev   写入到 devDependencies 对象

npm i module_name  -g  全局安装
  i 是install 的简写
*/

// html-webpack-plugin : 将index.html 生成内存的html 文件

// npm i sass-loader -D 需要node-sass 依赖

// 安装babel

// npm i babel-core babel-loader babel-plugin-transform-runtime -D

// npm i babel-preset-env babel-preset-stage-0 -D
// babel-plugin-transform-runtime 语法转换器，
// babel-preset-env ：语法表， 是比较新的es 语法，包含了es**