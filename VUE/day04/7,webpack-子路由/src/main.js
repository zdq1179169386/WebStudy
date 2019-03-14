import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import router from './router'

var vm = new Vue({
    el:'#app',
    data:{},
    render:function(createEl){
        return createEl(App)
    },
    router
})