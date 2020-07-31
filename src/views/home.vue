<template>
    <div class="wrap">
        <router-view/>
        <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
            <van-tabbar-item icon="home-o" to="/home/index" name="index">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/home/category" name="category">分类</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/home/account" name="account">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                active: 0,
            }
        },
        methods:{

        }
    }

</script>
<style scoped>


</style>
