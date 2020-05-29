<template>
  <div class="nav-topbar">
    <div class="container">
      <div class="topbar-menu">
        <a href="javascript:;">小米商城</a><span>|</span>
        <a href="javascript:;">MIUI</a><span>|</span>
        <a href="javascript:;">IoT</a><span>|</span>
        <a href="javascript:;">云服务</a><span>|</span>
        <a href="javascript:;">金融</a><span>|</span>
        <a href="javascript:;">有品</a><span>|</span>
        <a href="javascript:;">小爱开放平台</a><span>|</span>
        <a href="javascript:;">企业团购</a><span>|</span>
        <a href="javascript:;">资质证照</a><span>|</span>
        <a href="javascript:;">协议规则</a><span>|</span>
        <a href="javascript:;">下载app</a><span>|</span>
        <a href="javascript:;">Select Location</a>
      </div>
      <div class="topbar-user">
        <a href="javascript:;" v-if='username'>{{username}}</a>
        <a href="javascript:;" v-if='!username' @click="goLogin">登录</a><span v-if='!username'>|</span>
        <a href="javascript:;" v-if='username'>我的订单</a><span v-if='username'>|</span>
        <a href="javascript:;" v-if='username' @click='outLogin'>退出</a><span v-if='username'>|</span>
        <a href="javascript:;">消息通知</a>
        <a href="javascript:;" class="my-cart" @click="goToCart">
          <span class="icon-cart iconfont">&#xe63f;</span>
          购物车({{cartCount}})
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'top-bar',
  props: {
    username: String
  },
  mounted () {
    const params = this.$route.params
    if (params && params.from === 'login') {
      this.getCartProduct()
    }
  },
  methods: {
    goToCart () {
      this.$router.push('/cart')
    },
    goLogin () {
      this.$router.push('/login')
    },
    getCartProduct () {
      this.axios.get('/carts/products/sum').then((value = 0) => {
        this.$store.dispatch('getCartcount', value)
      }).catch(reason => {
        console.log(reason)
      })
    },
    outLogin () {
      console.log('1')
      this.axios.post('/user/logout').then(value => {
        this.$message.success('退出成功！')
        this.$cookie.set('userId', '', { expires: -1 })
        this.getUsername('')
        this.getCartcount('0')
      }).catch(reason => {
        this.$message.error('网络繁忙！请重试')
        console.log(reason)
      })
    },
    ...mapActions(['getUsername', 'getCartcount'])
  },
  computed: {
    ...mapState(['cartCount'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
  .nav-topbar {
    height: $fontL;
    line-height: $fontL;
    background: $colorB;
    color: #b0b0b0;
    .container{
      @include flex();
      a{
        display: inline-block;
        color: #b0b0b0;
        margin-right: 8px;
        margin-left: 8px;
      }
      .my-cart{
        height: $fontL;
        width: 110px;
        text-align: center;
        background: #424242;
        .icon-cart{
          font-size: $fontI;
        }
        &:hover{
          color: $colorA;
          background: $colorL;
        }
      }
    }
  }
</style>
