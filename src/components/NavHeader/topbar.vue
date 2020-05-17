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
        <a href="javascript:;">登录</a><span>|</span>
        <a href="javascript:;">注册</a><span>|</span>
        <a href="javascript:;">消息通知</a>
        <a href="javascript:;" class="my-cart">
          <span class="icon-cart iconfont">&#xe63f;</span>
          购物车(0)
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topbar'
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/mixin.scss';
  .nav-topbar {
    height: 40px;
    line-height: 40px;
    background: #333;
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
        height: 40px;
        width: 110px;
        text-align: center;
        background: #424242;
        .icon-cart{
          font-size: 16px;
        }
        &:hover{
          color: #ff6700;
          background: #fff;
        }
      }
    }
  }
</style>
