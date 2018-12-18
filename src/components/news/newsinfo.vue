<template>
    <div class="detail-container">
        <h1 class="detail-header">这是详情页面</h1>
        <p class="detail-small-header">
            <span>发表时间：2018.12.24</span>
            <span>点击0次</span>
        </p>
        <div class="detail-content"></div>
    </div>
</template>

<script>
    export default {
        name: "newsinfo"
    }
</script>

<style lang="scss" scoped>
    .detail-container{
        .detail-header{font-size: 16px;text-align: center;padding-top: 5px;color: red}
        .detail-small-header{
            display: flex;
                font-size: 14px;color:skyblue;
                justify-content: space-between;
                padding: 5px 50px 0 10px;

        }
        .detail-content{
            border: 1px solid #000000;
        }
    }
</style>