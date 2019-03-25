import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './lib/mui/css/mui.css'
// tabbar 购物车图标是额外的
import './lib/mui/css/icons-extra.css'

// 按需导入
// import { Header ,Swipe, SwipeItem, Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload)

// Lazyload 组件按需导入不行，所以换成全部导入
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import App from './App.vue'
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
// 配置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io'

// moment 时间格式化
import moment from 'moment'
// 全局过滤器
Vue.filter('ZD_Datafformat', function (dataStr, parrten = 'YYYY-MM-DD hh:mm:ss') {
    return moment(dataStr).format(parrten);
})
// 图片预览组件
import VuePreview from 'vue-preview'
//使用vue-preview
// Vue.use(VuePreview)

Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {
        top: 0,
        bottom: 0
    },
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
})


//   注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 从本地存储中取出购物车的数据
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state: {
        // 存放购物车数据
        car: car
    },
    mutations: {
        // 加入购物车
        addToCar(state, goodsItem) {
            var flage = false;
            state.car.some(item => {
                if (item.id == goodsItem.id) {
                    item.count += parseInt(goodsItem.count)
                    flage = true;
                    return true;
                }
            })
            if (!flage) {
                state.car.push(goodsItem)
            }
             // 将购物车数据存到 localStorage 本地存储
             localStorage.setItem('car', JSON.stringify(state.car));
        },
         // 更新购物车中商品选中状态
         updateGoodsSelected(state, obj){
            state.car.some(item => {
                if(item.id == obj.id){
                    item.selected = obj.selected;
                }
            })
            // 将购物车数据存到 localStorage 本地存储
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        // 更新购物车商品数量
        updateGoodsInfo(state,obj){
            state.car.some(item => {
                if(item.id == obj.id){
                    item.count = obj.count;
                }
            })
            // 将购物车数据存到 localStorage 本地存储
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: {
        // tabbar 的购物车数量
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        },
        // 获取选中的对象
        getGoodsSelected(state){
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.selected;
            })
            return o;
        },
       
    }
})

var vm = new Vue({
    el: '#app',
    data: {},
    render: function (createEl) {
        return createEl(App)
    },
    router,
    store
})

// babel-plugin-transform-remove-strict-mode 
// webpack 移除严格模式