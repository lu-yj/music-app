<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, idx) in imgs" :key="idx"><img :src="item.pic"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';  
import 'swiper/css/swiper.css';
import { getBanner } from '../api/getBanner';

export default {
    components: {
      Swiper,
    },

    data() {
      return {
        imgs: [
          {pic: require('../assets/1.jpg')},
          {pic: require('../assets/2.jpg')},
          {pic: require('../assets/3.jpg')},
        ],
      }
    },

    async mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
          
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        });

        let res = await getBanner();
        this.imgs = res.data.banners;
        console.log(res.data.banners);
    },

  };
</script>

<style lang="less" scoped>
.swiper-container{
  width: 9rem;
  height: 4rem;
  border-radius: 0.1rem;
}

.swiper-slide{
  width: 100%;
}
</style>