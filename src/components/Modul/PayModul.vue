<template>
  <div class="pay">
    <div class="mark"></div>
    <div class="payimg">
      <img src="/imgs/pay/icon-scan.png" alt="">
      <img :src="img" alt="">
      <span class="iconfont" @click="close">&#xe668;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paymodul',
  props: {
    img: String
  },
  methods: {
    close () {
      this.$emit('wechatClose')
    }
  }
}
</script>

<style lang='scss' scoped>
  .pay{
    .mark{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.3);
      z-index: 1;
    }
    .payimg{
      z-index: 10;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -40%);
      img{
        display: inline-block;
        width: 240px;
        vertical-align: middle;
      }
      .iconfont{
        vertical-align: top;
        font-size: 20px;
        transition: all .5s;
        cursor: pointer;
        &:hover{
          color: #ff6700;
        }
      }
    }
  }
</style>
