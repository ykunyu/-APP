<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in datalist" :key="item.id">
                <router-link to="/home/newslist/detail">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{item.add_time}}</span>
                            <span>点击次数:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    require('../../../SimulationAPI/Newlist.js');
    export default{
        data(){
            return{
                datalist:[]
            }
        },
        created(){
            this.getNewsList();
        },
        methods:{
            getNewsList(){
                this.$http.get("api/getnewslist").then(res=>{
                    if (res.body.status===0){
                        this.datalist=res.body.message
                    } else {
                        Toast("获取列表失败！");
                    }

                })
            }
        }

    }
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #000000;
                display: flex;
                justify-content:space-between;
            }
        }
    }
</style>