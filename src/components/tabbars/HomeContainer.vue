<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in datalist">
                <img :src="item.imgUrl">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>

    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    require('../../../SimulationAPI/Swipter.js');
    export default {
        data(){
            return{
                datalist:[]
            }
        },
        created(){
            this.getSwiper();
        },
        methods:{
            getSwiper(){
                this.$http.get("api/getlunbo").then(res=>{

                    if (res.body.status===0){
                        this.datalist=res.body.datalist
                    }else {
                        Toast("获取图片失败！");
                    }

                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }
            &:nth-child(2){
                background-color: green;
            }
            &:nth-child(3){
                background-color: blue;
            }
        }
    }


    .mui-grid-view.mui-grid-9{
        border: none;
        background-color: #fff;
        .mui-table-view-cell{
            border: none;
            img{
                width: 60px;
                height: 60px;
            }
            div{
                font-size: 13px;
            }
        }

    }

</style>