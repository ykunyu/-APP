import VueRouter from 'vue-router'

import HomeContainer from './components/tabbars/HomeContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import ShopCarContainer from './components/tabbars/ShopCarContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import Newslist from './components/news/Newslist.vue'
import Newsinfo from './components/news/newsinfo.vue'
var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopCarContainer},
        {path:'/home/newslist',component:Newslist},
        {path:'/home/newslist/detail',component:Newsinfo}
    ],
    linkActiveClass:'mui-active'
});
export default router
