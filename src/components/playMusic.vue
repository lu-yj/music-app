<template>
    <div class="playPage">
        <div class="bg" :style="{backgroundImage: `url(${bgUrl})`}"></div>
        <header>
            <svg class="icon" aria-hidden="true" @click="$emit('back')">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
            <div class="title">
                <marquee behavior="scroll" direction="left">{{songName}}</marquee>
            </div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
        </header>
        <div class="cd" v-show="!isLyric" @click="changeShow">
            <img class="needle" src="@\assets\img\needle.png" alt="">
            <img class="disc" src="@\assets\img\disc.png" alt="">
            <img class="discImg" :src="bgUrl" alt="" :class="{active: !paused}">
        </div>
        <div class="lyric" v-show="isLyric" ref="lyric" @click="changeShow">
            <p :class="{active: (curTime*1000 < item.curLyricTime && curTime*1000 > item.preLyricTime)}" v-for="(item, i) in $store.getters.lyricList" :key="i">{{item.text}}</p>
        </div>
        <div class="progress"></div>
        <footer>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xunhuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="changeSong(-1)">
                <use xlink:href="#icon-shangyige"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-if="paused" @click="play" style="width: 1rem; height: 1rem">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else @click="play" style="width: 1rem; height: 1rem">
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="changeSong(1)">
                <use xlink:href="#icon-xiayige"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhankai"></use>
            </svg>
        </footer>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    props: ['bgUrl', 'songName', 'paused', 'play'],
    data() {
        return {
            isLyric: true,
        }
    },
    methods: {
        changeSong(n) {
            if ((this.playCurIdx + n) < 0) {
                this.$store.commit('setPlayIdx', this.playList.length - 1);
            } else if ((this.playCurIdx + n) === this.playList.length) {
                this.$store.commit('setPlayIdx', 0);
            } else {
                this.$store.commit('setPlayIdx', this.playCurIdx + n);
            }
        },
        changeShow(){
            this.isLyric = !this.isLyric;
        }
    },
    computed: {
        ...mapState(['lyric', 'curTime', 'playList', 'playCurIdx']),
    },
    watch: {
        curTime() {
            let p = document.querySelector('p.active');
            // console.log(p);
            this.$refs.lyric.scrollTop = p ? p.offsetTop : 0;
        }
    }
}
</script>

<style lang="less" scoped>
.playPage{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    .bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-size: auto 100%;
        background-position: center;
        filter: blur(60px);
    }
    header{
        position: absolute;
        top: 0;
        left: 0;
        color: lightgray;
        font-weight: 600;
        .icon{
            fill: white;
        }
        marquee{
            display: flex;
            width: 6rem;
        }
    }
    .cd{
        position: absolute;
        width: 10rem;
        height: 12rem;
        top: 2rem;
        .needle{
            width: 2rem;
            height: auto;
            position: absolute;
            left: 50%;
            z-index: 3;
        }
        .disc, .discImg, .discImg.active{
            width: 6rem;
            height: auto;
            position: absolute;
            top: 2rem;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 2;
        }
        .discImg, .discImg.active{
            width: 5rem;
            height: 5rem;
            border-radius: 2.5rem;
            top: 2.5rem;
            z-index: 1;
        }
        .discImg.active{
            animation: rotate 10s linear infinite;
            @keyframes rotate{
                100%{
                    transform: rotate(360deg);
                }
            }
        }
    }
    .lyric{
        position: absolute;
        width: 10rem;
        height: 12rem;
        top: 3rem;
        overflow: scroll;
        text-align: center;
        color: white;
        font-size: 0.5rem;
        .active{
            color: red;
        }

    }
    footer{
        bottom: 1rem;
        .icon{
            fill: white;
        }
    }
}
</style>