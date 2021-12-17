<template>
  <top-nav></top-nav>
  <banner></banner>
</template>

<script>
import topNav from '@/components/topNav.vue'
import banner from '@/components/banner.vue'

export default {
  name: 'Home',

  components: {
    topNav,
    banner,
  },
  
}
</script>

<style lang="less" scoped>

</style>