<template>
	<div class="home">
		<home-nav></home-nav>
		<banner></banner>
		<icon-list></icon-list>
		<song-sheet-list></song-sheet-list>	
	</div>
</template>

<script>
import homeNav from '@/components/homeNav.vue'
import banner from '@/components/banner.vue'
import iconList from '@/components/iconList.vue'
import songSheetList from '@/components/songSheetList.vue'

export default {
  name: 'Home',

  components: {
    homeNav,
    banner,
    iconList,
    songSheetList,
},
  
}
</script>

<style lang="less" scoped>
.home{
  background-image: linear-gradient(AntiqueWhite, whitesmoke);
}
</style>