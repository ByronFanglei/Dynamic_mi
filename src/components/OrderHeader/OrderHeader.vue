<template>
  <div class="order">
    <div class="container">
      <div class="conleft">
        <div class="logo">
          <a href="/index"></a>
        </div>
        <div class="mycart">{{title}}</div>
        <div class="mes">
          <slot name="mes"></slot>
        </div>
      </div>
      <div class="conright" v-if="!username">
        <a href="/login">登录</a>
        <span class="line"></span>
        <a href="/register">注册</a>
      </div>
      <div class="conright" v-if="username">
        <a href="javascript:;">{{username}}</a>
        <span class="line"></span>
        <a href="javascript:;">{{ new Date() | dateformat('YYYY-MM-DD HH:mm:ss')}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  name: 'order-header',
  props: {
    title: String
  },
  computed: {
    ...mapState(['username'])
  },
  filters: {
    dateformat (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
      return moment(dataStr).format(pattern)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
  .order{
    width: 100%;
    height: 102px;
    border-bottom: 2px solid #ff6700;
    .container{
      @include flex();
      .conleft{
        .logo{
          margin-top: 24px;
          margin-right: 26px;
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #ff6700;
          @include logo();
          a{
            vertical-align: middle;
          }
        }
        .mycart{
          display: inline-block;
          font-size: $fontC;
          color: $colorB;
          margin-right: 20px;
          vertical-align: middle;
        }
        .mes{
          display: inline-block;
          span{
            vertical-align: sub;
            color: #757575;
          }
        }
      }
      .conright{
        a{
          color: #757575;
        }
      }
    }
  }
</style>
