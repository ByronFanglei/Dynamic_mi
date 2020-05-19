<template>
  <div class="banner">
    <div class="four-banner">
      <a :href="`/product/${item.id}`" v-for="item in bannerfour" :key="item.id">
        <img :src="item.img" alt="">
      </a>
    </div>
    <div class="big-banner">
      <img src="/imgs/banner.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      bannerfour: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        }, {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        }, {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        }, {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .banner{
    .four-banner{
      margin: 14px auto;
      a{
        display: inline-block;
        margin-left: 15px;
        img{
          width: 295px;
          height: 170px;
        }
      }
      a:first-of-type{
        margin-left: 0;
      }
    }
    .big-banner{
      margin-bottom: 14px;
    }
  }
</style>
