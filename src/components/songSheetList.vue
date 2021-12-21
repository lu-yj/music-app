<template>
    <div class="container">
        <div class="top">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <!-- <div class="swiper-list">
            <div class="swiper-wrapper">
                <router-link :to="{path: '/songsheet', query: {id: item.id}}" class="swiper-slide" v-for="(item, idx) in listData" :key="idx">
                    <img :src="item.picUrl">
                    <div class="name">{{item.name}}</div>
                    <div class="count">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bofang1"></use>
                        </svg>
                        <span>{{changeUnit(item.playCount)}}</span>        
                    </div>
                </router-link>
            </div>
        </div> -->
        <div class="grid-container">
            <router-link class="grid-item" :to="{path: '/songsheet', query: {id: item.id}}" v-for="(item, i) in listData" :key="i">
                <img class="cover-img" :src="item.picUrl" alt="">
                <p class="sheet-name">{{item.name}}</p>
                <div class="count">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    <p>{{changeUnit(item.playCount)}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';  
import 'swiper/css/swiper.css';
import { getSongSheetList } from '../api/axiosReq';

export default {
    data() {
        return {
            listData: [],
        }
    },

    methods: {
        changeUnit(num) {
            if (num >= 100000000) {
                return (num / 100000000).toFixed(2) + '亿';
            } else if (num >= 10000) {
                return (num / 10000).toFixed(2) + '万';
            } else {
                return num;
            }
        },
    },

    async mounted() {
        let res = await getSongSheetList();
        this.listData = res.data.result;
    },

    // updated() {
    //     var swiper = new Swiper(".swiper-list", {
    //         loop: true,
    //         slidesPerView: 3,
    //         spaceBetween: 10,
    //     });
    // },
}
</script>

<style lang="less" scoped>
.container{
    padding: 0.4rem;
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.2rem;
        margin-bottom: 0.4rem;
        .title{
            font-size: 0.5rem;
            font-weight: 600;
        }
        .more{
            border: 1px solid black;
            width: 1.8rem;
            height: 0.6rem;
            line-height: 0.6rem;
            border-radius: 0.3rem;
            font-size: 0.3rem;
            text-align: center;
            background-color: snow;
        }
    }
    .swiper-list{
        width: 9.2rem;
        height: 3rem;
        .swiper-slide{
            display: flex;
            flex-direction: column;
            position: relative;
            img{
                width: 100%;
                height: auto;
                border-radius: 0.2rem;
            }
            .name{
                width: 100%;
                height: 1rem;
                font-size: 0.3rem;
            }
            .count{
                position: absolute;
                top: 0.1rem;
                right: 0.1rem;
                font-size: 0.2rem;
                color: white;
                display: flex;
                align-items: center;
                .icon{
                    width: 0.4rem;
                    height: 0.4rem;
                    fill: white;
                }
            }
        }
    }
    .grid-container{
        display: grid;
        grid-template-columns: repeat(3, 2.8rem);
        justify-content: space-between;
        grid-row-gap: 0.5rem;
        .grid-item{
            display: flex;
            align-items: center;
            flex-direction: column;
            position: relative;
            .cover-img{
                width: 100%;
                border-radius: 0.3rem;
            }
            .sheet-name{
                width: 100%;
                font-size: 0.3rem;
            }
            .count{
                position: absolute;
                top: 0.1rem;
                right: 0.1rem;
                font-size: 0.2rem;
                color: white;
                display: flex;
                align-items: center;
                .icon{
                    width: 0.4rem;
                    height: 0.4rem;
                    fill: white;
                }
            }
        }
    }
}
</style>