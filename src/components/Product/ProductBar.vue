<template>
  <div class="product-bar">
    <div class="bar-left">
      <span class="pro">小米10Pro</span>
      <span class="line"></span>
      <span class="cen">小米10</span>
    </div>
    <div class="bar-right">
      <a href="javascript:;">概述</a><span class="line"></span>
      <a href="javascript:;">参数</a><span class="line"></span>
      <a href="javascript:;">F码通道</a><span class="line"></span>
      <a href="javascript:;">咨询客服</a><span class="line"></span>
      <a href="javascript:;">用户评价</a>
      <div class="btn">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-bar'
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/button.scss';
    .product-bar{
      @include container();
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bar-left{
        span{
          display: inline-block;
          color: #424242;
        }
        .pro{
          font-size: $fontH;
        }
        .cen{
          font-size: $fontK;
        }
      }
      .bar-right{
        margin: 17px 0;
        a{
          font-size: $fontJ;
          color: #616161;
          &:hover{
            color: $colorA;
          }
        }
        .btn{
          background-color: $colorA;
          margin-left: 5px;
        }
      }
    }
</style>
