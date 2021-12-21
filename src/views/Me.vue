<template>
    <div class="user">
        <header>
            <svg class="icon" aria-hidden="true" @click="$router.push('/')">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
        </header>
        <section class="profile">
            <img :src="$store.state.user.detail.profile.avatarUrl" alt="">
            <h4 class="nickname">{{$store.state.user.detail.profile.nickname}}</h4>
            <div class="followInfo">
                <p>关注: {{$store.state.user.detail.profile.follows}}</p>
                <p>粉丝: {{$store.state.user.detail.profile.followeds}}</p>
            </div>
        </section>
        <section class="iconList">
            <div class="iconItem" v-for="(item, i) in iconInfo" :key="i">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-${item[0]}`"></use>
                </svg>
                <div class="iconNote">{{item[1]}}</div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iconInfo: [
                ['yinyue', '本地音乐'],
                ['yunduan', '云端'],
                ['yigou', '收藏'],
                ['bofang2', '最近播放'],
                ['guanzhu', '我的关注'],
                ['shoucang', '收藏'],
                ['boke', '我的播客'],
                ['jiahao', '更多']
            ]
        }
    },
    mounted() {
        console.log(this.$store.state.user.detail.profile);
    }
}
</script>

<style lang="less" scoped>
.user{
    background-color: floralwhite;
    height: 100vh;
    .profile{
        height: 2rem;
        margin: 0.6rem;
        padding: 0 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: whitesmoke;
        border-radius: 0.5rem;
        img{
            width: 1.4rem;
            border-radius: 0.7rem;
        }
        .followInfo{
            font-size: 0.4rem;
        }
    }
    .iconList{
        display: grid;
        justify-content: space-between;
        align-items: center;
        grid-template-columns: repeat(4, 2rem);
        margin: 0.6rem;
        padding: 0.2rem;
        grid-row-gap: 0.5rem;
        font-size: 0.4rem;
        background-color: whitesmoke;
        border-radius: 0.5rem;
        .iconItem{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>