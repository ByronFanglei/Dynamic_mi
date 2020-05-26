<template>
  <div class="product">
    <product-bar
      :class="{'is_fixed':isFixed}"
      :title='title'
    ></product-bar>
    <pro-swiper></pro-swiper>
    <pro-video></pro-video>
  </div>
</template>

<script>
import ProductBar from '../../components/Product/ProductBar'
import ProSwiper from './components/proswiper'
import ProVideo from './components/provideo'
export default {
  name: 'product',
  data () {
    return {
      isFixed: false,
      title: ''
    }
  },
  components: {
    ProductBar,
    ProSwiper,
    ProVideo
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    this.getProduct()
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll, false)
  },
  methods: {
    onScroll (e) {
      // 滚动兼容
      const tpScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = tpScrollTop > 200
    },
    getProduct () {
      const id = this.$route.params.id
      this.axios.get(`/products/${id}`).then(value => {
        this.title = value.name
        console.log(value)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
  .product{
    border-top: 1px solid #e0e0e0;
    .is_fixed{
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 2;
      background: $colorL;
    }
  }
</style>
