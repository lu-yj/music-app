<template>
    <div class="container">
        <div class="left">
            <img :src="playList[playCurIdx].al.picUrl" alt="">
            <div class="content">
                <div class="title">{{playList[playCurIdx].al.name}}</div>
                <div class="tip">横划可以切换上下首哦</div>
            </div>
        </div>
        <div class="right">
            <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg v-else class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-24gf-playlistMusic"></use>
            </svg>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playCurIdx].id}.mp3`"></audio>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default{
    data() {
        return {
            paused: true,
        }
    },

    methods: {
        play() {
            if (this.$refs.audio.paused) {
                this.$refs.audio.play();
                this.paused = false;
            } else {
                this.$refs.audio.pause();
                this.paused = true;
            }
        },
    },

    computed: {
        ...mapState(['playList', 'playCurIdx']),
    },

    mounted() {

    },
}

</script>

<style lang="less" scoped>
.container{
    background-color: white;
    width: 10rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid gray;
    .left{
        display: flex;
        padding-left: 0.4rem;
        img{
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }
        .content{
            padding-left: 0.2rem;
            .tip{
                font-size: 0.3rem;
                color: gray ;
            }
        }
    }
    .right{
        .icon{
            width: 0.5rem;
            height: 0.5rem;
        }
    }
}
</style>