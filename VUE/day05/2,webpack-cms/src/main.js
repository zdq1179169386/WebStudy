import Vue from 'vue'

import  './lib/mui/css/mui.css'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import App from './App.vue'

var vm = new Vue({
    el:'#app',
    data:{},
    render:function(createEl){
        return createEl(App)
    },
})

console.log('111')