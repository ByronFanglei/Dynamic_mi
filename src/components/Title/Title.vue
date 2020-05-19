<template>
  <div class="comtitle">
    <div>手机</div>
    <div>
      查看全部
      <span class="iconfont">&#xe63e;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comtitle'
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
  .comtitle{
    @include flex();
    height: 58px;
    line-height: 58px;
    div:first-of-type{
      font-size: $fontF;
      color: $colorB;
      font-weight: 200;
    }
    div:last-of-type{
      cursor: pointer;
      font-size: $fontI;
      color: #424242;
      transition: color .2s;
      &:hover{
        color: $colorA;
        transition: color .2s;
      }
    }
  }
</style>
