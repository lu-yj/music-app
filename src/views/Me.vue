<template>
    <div class="header">
        <svg class="icon" aria-hidden="true" @click="$router.push('/')">
			<use xlink:href="#icon-fanhui"></use>
		</svg>
    </div>
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
                ['boke1', '我的播客'],
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
.profile{
    width: 10rem;
    height: 3rem;
    margin-top: 3rem;
    padding: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 1.4rem;
        border-radius: 0.7rem;
    }
    .followInfo{
        color: darkgray;
        font-size: 0.4rem;
    }
}
.iconList{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 10rem;
    .iconItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
    }
}
</style>