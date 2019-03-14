// webpack 默认导入的 vue.common.js，阉割版的vue

import Vue from 'vue'
// webpack 无法打包.vue 类型的文件, 需要装 vue-loader
// npm i vue-loader vue-template-compiler -D
import login from './login.vue'
// 回顾 包的查找规则：
// 1. 找 项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一个 main 属性【main属性指定了这个包在被加载时候，的入口文件】

// import Vue from '../node_modules/vue/dist/vue.js'

var vm = new Vue({
    el:'#app',
    data:{
        msg : '123'
    },
    // render: function(createEl){
    //     return createEl(login)
    // },
    // 箭头函数
    render: c => c(login)
})