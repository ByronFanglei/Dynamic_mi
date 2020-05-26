<template>
  <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
    <swiper-slide class="swiper-slide" v-for="item in imgList" :key="item.id">
      <img :src="item.img" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'pro-swiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      imgList: [
        {
          id: '42',
          img: '/imgs/product/one.jpg'
        },
        {
          id: '45',
          img: '/imgs/product/two.jpg'
        },
        {
          id: '46',
          img: '/imgs/product/three.jpg'
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang='scss' scoped>
  .swiper{
    .swiper-slide{
      img{
        width: 100%;
        background-size: cover;
      }
    }
  }
</style>
