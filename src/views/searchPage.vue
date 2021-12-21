<template>
    <div class="searchPage">
        <search-nav></search-nav>
    </div>
</template>

<script>
import searchNav from "../components/searchNav.vue"

export default {
    components: {
        searchNav
    }
}
</script>

<style lang="less" scoped>
.searchPage{
  background-image: linear-gradient(AntiqueWhite, whitesmoke);
}
</style>