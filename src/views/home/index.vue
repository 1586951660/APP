<template>
    <div class="wrap">
        <div class="top">
            <van-row type="flex" justify="space-between">
                <van-col span="4" class="logo">
                    <img src="../../assets/img/logo.png" alt="">
                </van-col>
                <van-col span="14">
                    <div class="topSearch" @click="">
                        <van-icon name="search"  class="search_icon"/>
                        <span class="placeholder">搜索商品，共33395款好物</span>
                    </div>
                </van-col>
                <van-col span="3">
                    <van-button type="primary" size="mini" class="login_btn">登录</van-button>
                </van-col>
            </van-row>
        </div>
        <div class="content">
            <van-tabs v-model="active">
                <van-tab title="推荐">
                    <div class="commend-wrap">
                        <div class="scroll">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item>1</van-swipe-item>
                                <van-swipe-item>2</van-swipe-item>
                                <van-swipe-item>3</van-swipe-item>
                                <van-swipe-item>4</van-swipe-item>
                            </van-swipe>
                        </div>
                        <div class="first">
                            <van-row type="flex" class="flex-title">
                                <van-col span="8" style="margin-left: 12px"><i>haha</i>网易自营品牌</van-col>
                                <van-col span="8"><i>haha</i>30天无忧退货</van-col>
                                <van-col span="8"><i>haha</i>48小时无忧退款</van-col>
                            </van-row>
                        </div>
                        <div class="swiper-slide">

                        </div>
                    </div>
                </van-tab>
                <van-tab title="居家生活">
                    <div class="commend-wrap">
                        <div class="scroll">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item>1</van-swipe-item>
                                <van-swipe-item>2</van-swipe-item>
                                <van-swipe-item>3</van-swipe-item>
                                <van-swipe-item>4</van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="服饰鞋包">
                    <div class="commend-wrap">
                        <div class="scroll">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item>1</van-swipe-item>
                                <van-swipe-item>2</van-swipe-item>
                                <van-swipe-item>3</van-swipe-item>
                                <van-swipe-item>4</van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="美食酒水">
                    <div class="commend-wrap">
                        <div class="scroll">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item>1</van-swipe-item>
                                <van-swipe-item>2</van-swipe-item>
                                <van-swipe-item>3</van-swipe-item>
                                <van-swipe-item>4</van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="个护清洁">
                    <div class="commend-wrap">
                        <div class="scroll">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item>1</van-swipe-item>
                                <van-swipe-item>2</van-swipe-item>
                                <van-swipe-item>3</van-swipe-item>
                                <van-swipe-item>4</van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="母婴亲子">
                    <div class="commend-wrap">
                        <div class="scroll">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item>1</van-swipe-item>
                                <van-swipe-item>2</van-swipe-item>
                                <van-swipe-item>3</van-swipe-item>
                                <van-swipe-item>4</van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="运动旅行">
                    <div class="commend-wrap">
                        <div class="scroll">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item>1</van-swipe-item>
                                <van-swipe-item>2</van-swipe-item>
                                <van-swipe-item>3</van-swipe-item>
                                <van-swipe-item>4</van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="数码家电">
                    <div class="commend-wrap">
                        <div class="scroll">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item>1</van-swipe-item>
                                <van-swipe-item>2</van-swipe-item>
                                <van-swipe-item>3</van-swipe-item>
                                <van-swipe-item>4</van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="严选全球">
                    <div class="commend-wrap">
                        <div class="scroll">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item>1</van-swipe-item>
                                <van-swipe-item>2</van-swipe-item>
                                <van-swipe-item>3</van-swipe-item>
                                <van-swipe-item>4</van-swipe-item>
                            </van-swipe>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                active: 2,
            }
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)

            },
            onClickRight(){
                alert(2222)

            }
        }
    }
</script>
<style scoped>
    .logo{
        margin-top: 7px;
        /*width: 1.84rem;*/
        /*height: .53333rem;*/
    }
    .topSearch{
        display: flex;
        justify-content: center;
        height:28px;
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: 4px;
        align-items: center;
        margin-top: 10px;
    }
    .login_btn{
        width: 45px;
        height: 22px;
        background: #ffffff;
        color: red;
        margin-top: 13px;
        border: 1px solid red;
        margin-left: -18px;
        border-radius: 5px;
    }
    .search_icon{

        margin-left: -50px;
        margin-top: 2px;
    }
    .placeholder{
        opacity: 0.5;
        margin-left: 10px;
    }
    .scroll{
        flex: 1;
        height: 150px;
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: lightpink;
    }
    .commend-wrap{
        margin-top: 0.4px;
    }
    .first{
        margin-top: 10px;
    }
    .flex-title{
        font-size: 12px;
    }
</style>
