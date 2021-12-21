<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          	<div class="swiper-slide" v-for="(item, idx) in imgs" :key="idx">
		  		<img :src="item.pic">
			</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';  
import 'swiper/css/swiper.css';
import {getBanner} from '../api/axiosReq';

export default {
    components: {
      Swiper,
    },

    data() {
      return {
        imgs: [],
      }
    },

    async mounted() {
        let res = await getBanner();
        this.imgs = res.data.banners;
    },

	updated() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true, // 循环模式选项
          
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        });
	},
};
</script>

<style lang="less" scoped>
.swiper-container{
	width: 9.2rem;
    height: 3.6rem;
    border-radius: 0.5rem;
	margin: 1rem auto 0;
    .swiper-slide img{
        width: 100%;
    }
}
</style>