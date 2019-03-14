import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Account from './Account/Account.vue'
import GoodList from './GoodList/GoodList.vue'


var router = new VueRouter({
    routes:[
        { path : '/account', component : Account},
        { path : '/goodlist', component : GoodList},
    ]
})

var vm = new Vue({
    el:'#app',
    data:{},
    render:function(createEl){
        return createEl(App)
    },
    router
})