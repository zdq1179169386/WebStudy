import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import  './lib/mui/css/mui.css'
// tabbar 购物车图标是额外的
import './lib/mui/css/icons-extra.css'

import { Header ,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import App from './App.vue'
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
// 配置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io'

import moment from 'moment'
// 全局过滤器
Vue.filter('ZD_Datafformat', function(dataStr,parrten='YYYY-MM-DD hh:dd'){
    return moment(dataStr,parrten);
})

var vm = new Vue({
    el:'#app',
    data:{},
    render:function(createEl){
        return createEl(App)
    },
    router,

})

