<template>
	<header>
		<svg class="icon" aria-hidden="true" style="padding-top: 0.1rem;" @click="$router.go(-1)">
			<use xlink:href="#icon-fanhui"></use>
		</svg>
        <input type="text" :placeholder="placeholder" @keydown.enter="saveKeyword" v-model="inputWord">
	</header>
    <div class="history" v-show="searchRes.length === 0">
        <p>历史</p>
        <div class="historyList">
            <span v-for="(item, i) in keywordList" :key="i" @click="historySearch(item)">{{item}}</span>
        </div>
    </div>
    <div class="resList" v-show="searchRes.length !== 0">
        <div class="playItem" v-for="(item, i) in searchRes" :key="i" @click="setPlay(item)">
            <div class="left">
                <div class="order">{{i+1}}</div>
                <div class="content">
                    <div class="title">{{item.name}}</div>
                    <div class="author">
                        <!-- <div class="tag" v-for="(tag, i) in sheetinfo.tags" :key="i">{{tag}}</div> -->
                        <span>{{item.artists[0].name}}</span>
                    </div>
                </div>
            </div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shipin"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gengduo"></use>
            </svg>
        </div>
    </div>
</template>

<script>
import { searchMusic } from "../api/axiosReq";

export default {
    data() {
        return {
            placeholder: '点击搜索',
            keywordList: [],
            inputWord: '',
            searchRes: []
        }
    },
    methods: {
        async saveKeyword() {
            this.keywordList.push(this.inputWord);
            this.keywordList = [...new Set(this.keywordList)];
            sessionStorage.keywordList = JSON.stringify(this.keywordList);
            let res = await searchMusic(this.inputWord);
            // console.log(res);
            this.searchRes = res.data.result.songs;
        },
        historySearch(keyword) {
            this.inputWord = keyword;
            this.saveKeyword();
        },
        setPlay(item) {
            item.al = item.album;
            console.log(item);
            item.al.picUrl = item.album.artist.img1v1Url;
            this.$store.commit('pushPlayList', item);
            this.$store.commit('setPlayIdx',this.$store.state.playList.length - 1);
        }
    },
    beforeMount() {
        this.keywordList = sessionStorage.keywordList ? JSON.parse(sessionStorage.keywordList) : [];
    }
}
</script>

<style lang="less" scoped>
header{
    input{
        border: none;
        outline: none;
        border-bottom: 1px solid gray;
        flex: 1;
        margin-left: 0.5rem;
        height: 0.8rem;
        font-size: 0.55rem;
    }
}
.history{
    width: 10rem;
    padding: 0.4rem;
    display: flex;
    height: 100vh;
    p{
        font-weight: 600;
    }
    .historyList{
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        align-content: flex-start;
        font-size: 0.4rem;
        margin-left: 0.5rem;
        span{
            background-color: lightgray;
            padding: 0 0.2rem;
            height: 0.6rem;
            line-height: 0.6rem;
            margin: 0.1rem 0.2rem;
            border-radius: 0.3rem;
            
        }
    }
}
.resList{
    background-image: linear-gradient(AntiqueWhite, whitesmoke);;
    .playItem{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.6rem;
        padding: 0 0.6rem;
        border-top: 1px solid whitesmoke;
        .left{
                display: flex;
                align-items: center;
                .order{
                    font-size: 0.5rem;
                    color: gray;
                    width: 1rem;
                }
                .content{                        
                    width: 6rem;
                    
                    .title{
                        font-size: 0.4rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .author{
                        display: flex;
                        align-items: center;
                        .tag{
                            font-size: 0.1rem;
                            color: orangered;
                            border: 1px solid orangered;
                            border-radius: 0.15rem;
                        }
                        span{
                            font-size: 0.2rem;
                            color: gray;
                            // padding-left: 0.1rem;
                        }
                    }
                }
            .icon{
                width: 0.6rem;
                height: 0.6rem;
            }
        }
    }
}
</style>