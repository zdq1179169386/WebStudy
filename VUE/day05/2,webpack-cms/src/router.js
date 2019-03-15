import VueRouter from 'vue-router'
import  './lib/mui/css/mui.css'


import Home from './compoents/tabbar/Home.vue'
import Member from './compoents/tabbar/Member.vue'
import Search from './compoents/tabbar/Search.vue'
import Shopcar from './compoents/tabbar/Shopcar.vue'


var router =  new VueRouter({
  routes : [
    { path : '/', redirect: '/home'},
    { path : '/home', component : Home},
    { path : '/member', component : Member},
    { path : '/search', component : Search},
    { path : '/shopcar', component : Shopcar},
  ],
  linkActiveClass : 'mui-active'
})

export default router