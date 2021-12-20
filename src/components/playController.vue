<template>
    <div class="footer">
        <div class="left" @click="show=true">
            <img :src="playList[playCurIdx].al.picUrl">
            <div class="content">
                <div class="title">{{playList[playCurIdx].name}}</div>
                <div class="tip">横划可以切换上下首哦</div>
            </div>
        </div>
        <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
            <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg v-else class="icon" aria-hidden="true" @click="play">
            <use xlink:href="#icon-zanting"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhankai"></use>
        </svg>
        <play-music v-show="show" 
            @back="show=false"
            :bgUrl="playList[playCurIdx].al.picUrl"
            :songName="playList[playCurIdx].name"
            :paused="paused"
            :play="play">
        </play-music>
        <audio ref="audio" autoplay :src="`https://music.163.com/song/media/outer/url?id=${playList[playCurIdx].id}.mp3`"></audio>
    </div>
</template>

<script>
import { mapState } from "vuex";
import playMusic from "./playMusic.vue";

export default{
    components: {
        playMusic,
    },
    
    data() {
        return {
            paused: false,
            show: false,
        }
    },

    methods: {
        play() {
            if (this.$refs.audio.paused) {
                this.$refs.audio.play();
                this.paused = false;
                this.updateTime();
            } else {
                this.$refs.audio.pause();
                this.paused = true;
                clearInterval(this.$store.state.intervalId);
            }
        },
         updateTime() {
			this.$store.state.intervalId = setInterval(()=>{
				this.$store.commit('setCurTime', this.$refs.audio.currentTime);
                console.log(this.$refs.audio.currentTime)
			}, 1000)
		}
    },

    computed: {
        ...mapState(['playList', 'playCurIdx']),
    },

    watch: {
        playCurIdx() {
            this.paused = false;
            this.updateTime();
        },
    },
    mounted() {
        this.$store.dispatch('reqLyric', {id: this.playList[this.playCurIdx].id});
    },
    updated() {
        this.$store.dispatch('reqLyric', {id: this.playList[this.playCurIdx].id});
    },
}

</script>

<style lang="less" scoped>
.footer{
    background-color: white;
    border-top: 1px solid gray;
    z-index: 5;
    .left{
        display: flex;
        width: 6rem;
        img{
            width: 1rem;
            height: 1rem;
            border-radius: 0.5rem;
        }
        .content{
            padding-left: 0.3rem;
            font-size: 0.45rem;
            .tip{
                font-size: 0.3rem;
                color: gray ;
            }
        }
    }
}
</style>