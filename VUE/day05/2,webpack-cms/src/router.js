import VueRouter from 'vue-router'
import  './lib/mui/css/mui.css'


import Home from './compoents/tabbar/Home.vue'
import Member from './compoents/tabbar/Member.vue'
import Search from './compoents/tabbar/Search.vue'
import Shopcar from './compoents/tabbar/Shopcar.vue'
import NewList from './compoents/news/NewList.vue'
import NewInfo from './compoents/news/Newinfo.vue'
import NewsPhotos from './compoents/newsphotos/newsphotos.vue'
import PhotoInfo from './compoents/newsphotos/PhotoInfo.vue'

var router =  new VueRouter({
  routes : [
    { path : '/', redirect: '/home'},
    { path : '/home', component : Home},
    { path : '/member', component : Member},
    { path : '/search', component : Search},
    { path : '/shopcar', component : Shopcar},
    { path : '/home/newsist', component : NewList},
    { path : '/home/newsinfo/:id', component : NewInfo},
    { path : '/home/newsphotos', component : NewsPhotos},
    { path : '/home/photoinfo', component:PhotoInfo }
  ],
  linkActiveClass : 'mui-active'
})

export default router