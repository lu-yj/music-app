<template>
    <div class="container">
        <song-sheet-top :sheetinfo="sheetInfo"></song-sheet-top>
        <play-list :sheetinfo="sheetInfo"></play-list>
    </div>
</template>

<script>
import { getSongSheet } from "../api/axiosReq";
import { useRoute } from "vue-router";
import songSheetTop from "../components/songSheetTop.vue";
import playList from "../components/playList.vue";
import { mapMutations } from 'vuex';

export default {
    components: {
        songSheetTop,
        playList,
    },

    data() {
        return {
            sheetData: [],
            sheetInfo: {
                creator: {},
                tracks: [],
            },
        }
    },

    methods: {
        ...mapMutations([
            'setPlayList',
        ]),
    },

    async mounted() {
        let id = useRoute().query.id;
        let res = await getSongSheet(id);
        this.sheetData = res.data.result;
        this.sheetInfo = res.data.playlist;
        this.setPlayList(this.sheetInfo.tracks);
        console.log(res.data.playlist);
    },
}
</script>

<style lang="less" scoped>


</style>