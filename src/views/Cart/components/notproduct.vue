<template>
  <div class="all">
    <div class="container">
      <div class="notimg">
        <img src="/imgs/cart-empty.png" alt="" align="middle">
      </div>
      <div class="notfont">
        <div class="empty">您的购物车还是空的！</div>
        <div class="product" v-if="!username">登录后将显示您之前加入的商品</div>
        <div class="btn-group">
          <div class="btn btn-large login" @click="Login" v-if="!username">立即登录</div>
          <div class="btn btn-large shoping" @click="gotoIndex">马上去购物</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'not-product',
  methods: {
    Login () {
      this.$router.push('/login')
    },
    gotoIndex () {
      this.$router.push('/index')
    }
  },
  computed: {
    ...mapState(['username'])
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
  .all{
    width: 100%;
    background: $colorJ;
  }
  .container{
    @include flex();
    padding: 65px 0 130px 0;
    .notimg{
      flex: 1;
      img{
        display: block;
        margin: 0 auto;
      }
    }
    .notfont{
      flex: 1;
      color: #b0b0b0;
      .empty{
        font-size: 36px;
        margin-bottom: 20px;
      }
      .product{
        font-size: $fontG;
        margin-bottom: 20px;
      }
      .btn-group{
        .login{
          background: $colorA;
          color: $colorL;
        }
        .shoping{
          border: 1px solid $colorA;
          color: $colorA;
        }
      }
    }
  }
</style>
