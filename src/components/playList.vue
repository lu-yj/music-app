<template>
    <div class="container">
        <div class="head">
            <div class="headLeft">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <span class="title">播放全部</span>
                <span class="sheetNum">(共{{sheetinfo.tracks.length}}首)</span>
            </div>
            <div class="btn">
                + 收藏（{{changeUnit(sheetinfo.subscribedCount)}}）
            </div>
        </div>
        <div class="list">
            <div class="playItem" v-for="(item, idx) in sheetinfo.tracks" :key="idx">
                <div class="left">
                    <div class="order">{{idx+1}}</div>
                    <div class="content">
                        <div class="title">{{item.name}}</div>
                        <div class="author">
                            <!-- <div class="tag" v-for="(tag, i) in sheetinfo.tags" :key="i">{{tag}}</div> -->
                            <span>{{item.al.name}}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shipinbofang"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-gengduo"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['sheetinfo'],

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
}
</script>

<style lang="less" scoped>
.container{
    width: 10rem;
    background-color: white;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    .head{
        display: flex;
        justify-content: space-between;
        height: 1.6rem;
        padding: 0.4rem;
        align-items: center;
        .headLeft{
            display: flex;
            align-items: center;
            .icon{
                width: 0.6rem;
                height: 0.6rem;
            }
            .title{
                font-size: 0.45rem;
                font-weight: 600;
                padding-left: 0.3rem;
            }
            .sheetNum{
                font-size: 0.4rem;
                color: gray;
            }
        }
        .btn{
            font-size: 0.4rem;
            color: white;
            background-color: orangered;
            height: 1rem;
            border-radius: 0.5rem;
            line-height: 1rem;
        }
    }
    .list{
        .playItem{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1.6rem;
            .left{
                display: flex;
                align-items: center;
                .order{
                    font-size: 0.5rem;
                    padding-left: 0.4rem;
                    color: gray;
                    width: 1.2rem;
                }
                .content{
                    .title{
                        font-size: 0.4rem;
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
            }
            .right{
                padding-right: 0.4rem;
                .icon{
                    width: 0.6rem;
                    height: 0.6rem;
                }
            }
        }
    }
}
</style>
