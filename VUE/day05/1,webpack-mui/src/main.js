import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import router from './router'

// 全部导入
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import 'bootstrap/dist/css/bootstrap.css'
// 按需导入
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)
// 导入mui 
import './lib/mui/css/mui.css'

var vm = new Vue({
    el:'#app',
    data:{},
    render:function(createEl){
        return createEl(App)
    },
    router
})