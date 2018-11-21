import VueRouter from 'vue-router'

import HomeContainer from './components/tabbars/HomeContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import ShopCarContainer from './components/tabbars/ShopCarContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopCarContainer}
    ],
    linkActiveClass:'mui-active'
});
export default router
