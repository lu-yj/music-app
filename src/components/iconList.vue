<template>
    <div class="iconList">
        <div class="iconItem" v-for="(item, i) in iconInfo" :key="i">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#icon-${item[0]}`"></use>
            </svg>
            <p>{{item[1]}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iconInfo: [
                ['tuijian', '每日推荐'],
                ['shouyinji', '私人FM'],
                ['gedan', '歌单'],
                ['paihangbang', '排行榜'],
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.iconList{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 0.6rem;
    .iconItem{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .icon{
            width: 1rem;
            height: 1rem;
        }
        p{
            font-size: 0.3rem;
        }
    }
}
</style>