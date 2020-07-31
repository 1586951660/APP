<template>
    <div class="login-wrap">
        <div class="logo">
<!--            <img src="../assets/img/bg.jpg" alt="">-->
            <h2>智慧居家养老</h2>
        </div>
        <div class="login_form">
            <div class="login_name">
                <img src="../assets/img/username.png" alt="" class="name_icon">
<!--                <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" class="name_icon"/>-->
                <input type="text" placeholder="请输入用户名">
            </div>
            <div class="login_password">
                <img src="../assets/img/password.png" alt="" class="password_icon">
<!--                <van-icon name="goods-collect-o" class="password_icon"/>-->
                <input type="password" placeholder="请输入密码">
            </div>
        </div>
        <div class="forget_password">忘记密码?</div>
        <div class="login_btn" @click="loginHandler">
            <span>登录</span>
        </div>
        <div class="register">还没有账号?<a href="https://www.baidu.com/">注册</a></div>
    </div>
</template>
<script>
    export default{
        name:'login',
        data(){
            return{

            }
        },
        methods:{
            loginHandler(){
                this.$router.push({path:"/home/index"})
            }
        }
    }
</script>
<style scoped>
    html{
        margin: 0;
        padding: 0;
    }
    .login-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
        background: url("../assets/img/login.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
    }
    .logo{
        margin-top: 120px;
        text-align: center;
    }
    .logo h2{
        margin-top: 150px;
    }
    .logo img{
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .login_form{
        position: absolute;
        border-radius: 15px;
        top: 360px;
    }
    .login_name{
        width: 250px;
        height: 30px;
        border-bottom: 1px solid gray;
    }
    .login_name input{
        border: none;
        margin-left: 40px;
        position: absolute;
        height: 25px;
    }
    .login_password input{
        border: none;
        margin-left: 40px;
        position: absolute;
        height: 25px;
    }
    .login_password{
        width: 250px;
        height: 30px;
        margin-top: 20px;
        /*border-radius: 15px;*/
        border-bottom: 1px solid gray;
    }
    .name_icon{
        position: absolute;
        width: 18px;
        height: 18px;
        top: 5px;
        left: 5px;
    }
    .password_icon{
        position: absolute;
        width: 18px;
        height: 18px;
        top: 56px;
        left: 5px;
    }
    .login_btn{
        width: 270px;
        height: 45px;
        border-radius:30px;
        background: cornflowerblue;
        color: #ffffff;
        position: absolute;
        top: 490px;
        text-align: center;
        line-height: 3em;
    }
    .forget_password{
        position: absolute;
        top:450px;
        margin-left:85px;
        color: gray;
    }
    .register{
        position: absolute;
        top: 555px;
    }
</style>
