<template>
    <div class="container">
        <img class="bg" :src="sheetinfo.coverImgUrl">
        <header>
            <div class="back">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-fanhui"></use>
                </svg>
                <span class="title">歌单</span>
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>               
            </div>
        </header>
        <div class="content">
            <div class="contentLeft">
                <img :src="sheetinfo.coverImgUrl">
                <div class="count">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    <span>{{changeUnit(sheetinfo.playCount)}}</span>        
                </div>
            </div>
            <div class="contentRight">
                <h4>{{sheetinfo.name}}</h4>
                <div class="author">
                    <img :src="sheetinfo.creator.avatarUrl" class="header">
                    <span>{{sheetinfo.creator.nickname}}</span>
                </div>
                <div class="description">{{sheetinfo.description}}</div>
            </div>
        </div>
        <div class="iconList">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liaotian"></use>
                </svg>
                <span>{{sheetinfo.commentCount}}</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <span>{{sheetinfo.shareCount}}</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-duoxuan"></use>
                </svg>
                <span>多选</span>
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
    height: 9rem;
    .bg{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
        filter: blur(50px);
    }
    header{
        .back{
            display: flex;
            align-items: center;
            color: white;
            span{
                margin-left: 0.5rem;
            }
        }
        .icon{
            fill: white;
        }
    }
    .content{
        display: flex;
        justify-content: space-between;
        padding: 0.4rem;
        .contentLeft{
            position: relative;
            img{
                width: 4rem;
                height: 4rem;
                border-radius: 0.2rem;
            }
            .count{
                position: absolute;
                top: 0.2rem;
                right: 0.2rem;
                font-size: 0.3rem;
                color: white;
                display: flex;
                align-items: center;
                .icon{
                    width: 0.5rem;
                    height: 0.5rem;
                    fill: white;
                }
            }
        }
        .contentRight{
            width: 4rem;
            h4{
                color: white;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .author{
                display: flex;
                align-items: center;
                margin: 0.3rem 0;
                img{
                    width: 0.5rem;
                    height: 0.5rem;
                    border-radius: 0.25rem;
                }
                span{
                    color: white;
                    font-size: 0.35rem;
                    padding-left: 0.2rem;
                }
            }
            .description{
                font-size: 0.3rem;
                color: white;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        }
    }
    .iconList{
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 1rem;
        .iconItem{
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: 0.8rem;
                height: 0.8rem;
                fill: white;
            }
            span{
                font-size: 0.3rem;
                color: white;
            }
        }
    }
}

</style>