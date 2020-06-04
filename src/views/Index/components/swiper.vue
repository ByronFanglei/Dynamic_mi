<template>
  <div class="container">
    <div class="swiper-box">
      <nav-menu></nav-menu>
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in slideList" :key="item.id">
          <a :href="`/product/${item.id}`">
            <img :src="item.img" alt="">
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import NavMenu from './navmenu'
export default {
  name: 'swiper-con',
  components: {
    Swiper,
    SwiperSlide,
    NavMenu
  },
  data () {
    return {
      swiperOptions: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        freeMode: false,
        // effect: 'flip',
        // flipEffect: {
        //   slideShadows: true,
        //   limitRotation: true
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '47',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '48',
          img: '/imgs/slider/slide-1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/mixin.scss';
  .container{
    @include container();
    .swiper-box{
      .swiper-container{
        .swiper-button-prev{
          left: 254px;
        }
        height: 460px;
        img{
          height: 100%;
        }
      }
    }
  }
</style>
