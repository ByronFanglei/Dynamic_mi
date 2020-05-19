<template>
  <div>
    <div class="index">
      <swiper-con></swiper-con>
      <banner></banner>
    </div>
    <div class="last">
      <product :phoneList='phoneList'></product>
    </div>
    <modul
      title='提示'
      sureText='查看购物车'
      btnType='1'
      modulType='middle'
      :showModul="true"
    >
      <template slot="home">
        <p>商品添加成功</p>
      </template>
    </modul>
  </div>
</template>

<script>
import SwiperCon from './components/swiper'
import Banner from './components/banner'
import Product from './components/product'
import Modul from '../../components/Modul/Modul'
export default {
  name: 'index',
  components: {
    SwiperCon,
    Banner,
    Product,
    Modul
  },
  data () {
    return {
      phoneList: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then(value => {
        value.list = value.list.slice(6, 14)
        this.phoneList = value.list
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
  .index{
    @include container();
  }
  .last{
    background: $colorJ;
    width: 100%;
  }
</style>
