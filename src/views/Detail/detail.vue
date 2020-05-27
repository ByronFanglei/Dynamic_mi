<template>
  <div>
    <product-bar :title='product.name'></product-bar>
    <div class="container">
      <div class="contentleft">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="swiper-slide"><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
          <swiper-slide class="swiper-slide"><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="contentright">
        <div class="title">{{product.name}}</div>
        <div class="explain"><mark>「分期享12期免息，低至417元起/期」</mark>向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G / 新一代LPDDR5内存 / 50W极速闪充+30W无线闪充+10W无线反充 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热 / 4500mAh大电量 / 多功能NFC</div>
        <div class="slef">小米自营</div>
        <div class="pricr">{{product.price | getPricr}}</div>
        <div class="line"></div>
        <div class="version">
          <div class="vtitle">选择版本</div>
          <div class="btn-huge" :class="{'selected':version==1}" @click="version=1">8GB+256GB</div>
          <div class="btn-huge" :class="{'selected':version==2}" @click="version=2">12GB+256GB</div>
          <div class="btn-huge" :class="{'selected':version==3}" @click="version=3">12GB+512GB</div>
        </div>
        <div class="color">
          <div class="vcolor">选择颜色</div>
          <div class="btn-huge" :class="{'selected':color==1}" @click="color=1">星空蓝</div>
          <div class="btn-huge" :class="{'selected':color==2}" @click="color=2">珍珠白</div>
        </div>
        <div class="total">
          <div class="totalA">
            <span v-if="version==1 && color==1">{{product.name}} 8GB+256GB 星空蓝</span>
            <span v-if="version==1 && color==2">{{product.name}} 8GB+256GB 珍珠白</span>
            <span v-if="version==2 && color==1">{{product.name}} 12GB+256GB 星空蓝</span>
            <span v-if="version==2 && color==2">{{product.name}} 12GB+256GB 珍珠白</span>
            <span v-if="version==3 && color==1">{{product.name}} 12GB+512GB 星空蓝</span>
            <span v-if="version==3 && color==2">{{product.name}} 12GB+512GB 珍珠白</span>
            <span>{{product.price | getPricr}}</span>
          </div>
          <div class="totalB">总计：{{product.price | getPricr}}</div>
        </div>
        <div class="btn-huge" style="background: #FF6700; color: #fff" @click="gotoCart">
          加入购物车
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBar from '../../components/Product/ProductBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'detail',
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      product: {},
      version: 1,
      color: 1,
      id: this.$route.params.id
    }
  },
  components: {
    ProductBar,
    Swiper,
    SwiperSlide
  },
  filters: {
    getPricr (value) {
      return `${value}元`
    }
  },
  mounted () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      this.axios.get(`/products/${this.id}`).then(value => {
        this.product = value
        // console.log(value)
      }).catch(reason => {
        console.log(reason)
      })
    },
    gotoCart () {
      if (this.$store.state.username) {
        this.axios.post('/carts', {
          productId: this.id,
          selected: true
        }).then(value => {
          this.$store.dispatch('getCartcount', value.cartTotalQuantity)
          this.$router.push('/cart')
        }).catch(reason => {
          console.log(reason)
        })
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/config.scss';
  .container{
    display: flex;
    padding: 32px 0 12px;
    .contentleft{
      width: 560px;
      img{
        width: 100%;
      }
    }
    .contentright{
      .title{
        color: #212121;
        font-size: $fontE;
      }
      .explain{
        margin-top: 8px;
        color: #808080;
        font-size: $fontJ;
        mark{
          background: $colorA;
        }
      }
      .slef{
        margin-top: 14px;
        color: $colorA;
        font-size: $fontJ;
      }
      .pricr{
        padding: 12px 0;
        color: $colorA;
        font-size: $fontH;
      }
      .line{
        margin: 12px 0;
        border-bottom: 1px solid #e0e0e0;
        height: 0;
      }
      .version{
        margin-bottom: 12px;
        .vtitle{
          color: $colorB;
          font-size: $fontH;
          margin-bottom: 12px;
        }
        .btn-huge{
          width: 319px;
          margin: 10px 12px 0 0;
          display: inline-block;
          border: 1px dotted $colorE;
        }
      }
      .color{
        margin-bottom: 12px;
        .vcolor{
          color: $colorB;
          font-size: $fontH;
          margin-bottom: 12px;
        }
        .btn-huge{
          width: 319px;
          margin: 10px 12px 0 0;
          display: inline-block;
          border: 1px dotted $colorE;
        }
      }
      .total{
        width: 600px;
        background: #f9f9fa;
        padding: 30px;
        margin-bottom: 30px;
        .totalA{
          display: flex;
          justify-content: space-between;
          color: #616161;
          font-size: $fontJ;
        }
        .totalB{
          color: $colorA;
          font-size: $fontE;
          padding: 20px 0 0 0;
        }
      }
    }
  }
</style>
