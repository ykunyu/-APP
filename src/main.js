import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import './lib/css/mui.css'
import './lib/css/icons-extra.css'
import "mint-ui/lib/style.css"

import APP from './App.vue'
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header);

import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root = 'http://vue.studyit.io';


var vm=new Vue({
    el:'#app',
    render:c => c(APP),
    router
})