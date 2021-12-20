<template>
    <div class="login">
        <p class="title">欢迎登录</p>
        <div class="forms">
            <div class="formItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yonghu"></use>
                </svg>
                <input v-model="phone" id="phone" type="text" placeholder="请输入手机号">
            </div>
            <div class="formItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-mima"></use>
                </svg>
                <input v-model="password" id="password" type="text" placeholder="请输入密码">
            </div>
            <button @click="loginEvent">登录</button>
        </div>
        <p class="content">其他登录方式</p>
        <div class="loginChoice"> 
            <svg class="icon" aria-hidden="true" style="width: 1rem; height: 1rem">
                <use xlink:href="#icon-weixin"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qq"></use>
            </svg>
            <svg class="icon" aria-hidden="true" style="padding-bottom: 0.05rem">
                <use xlink:href="#icon-pingguo"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phone: '',
            password: ''
        }
    },
    methods: {
        async loginEvent() {
            let res = await this.$store.dispatch('reqLogin', {phone: this.phone, password: this.password});
            if (res.data.code === 200) {
                this.$router.push('/me');
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #C73E2C;
    color: white;
    height: 100vh;
    .title{
        margin-top: 4rem;
        font-size: 0.8rem;
        letter-spacing: 8px;
    }
    .forms{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height:6.5rem;
        padding: 1rem;
        margin-top: 1rem;
        .formItem{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            width: 6rem;
            height: 1rem;
            border: none;
            border-radius: 0.5rem;           
            padding-left: 0.3rem;
            .icon{
                width: 0.7rem;
                height: 0.7rem;
                fill: gray;
            }
            input{
                width: 4.6rem;
                border: none;
                padding-left: 0.3rem;
            }
        }
        button{
            width: 3rem;
            height: 1rem;
            border: none;
            border-radius: 0.5rem;
            color: gray;
            font-size: 0.5rem;
        }
    }        
    .content{
        font-size: 0.4rem;
        margin-top: 1rem;
        border-bottom: white solid 1px;
    }
    .loginChoice{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.2rem;
        width: 3.2rem;
    }
}
</style>