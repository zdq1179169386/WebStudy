// 抽离路由组件
import VueRouter from 'vue-router'

import Account from './Account/Account.vue'
import GoodList from './GoodList/GoodList.vue'
import Login from './Account/Login.vue'
import Register from './Account/Register.vue'

var router = new VueRouter({
    routes:[
        { path : '/account', component : Account,children:[
            {path : 'login',component:Login},
            {path : 'register',component:Register},
        ]},
        { path : '/goodlist', component : GoodList},
    ]
})

export default router