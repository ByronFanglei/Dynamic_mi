<template>
  <div class="modul" v-show="showModul">
    <div class="mask"></div>
    <div class="modul-dialog">
      <div class="modul-header">
        <span>标题</span>
        <a href="javascript:;" class="iconfont">&#xe639;</a>
      </div>
      <div class="modul-body">
        <slot name="home"></slot>
      </div>
      <div class="modul-fotter">
        <div class="btn-group">
          <a href="javascript:;" class="btn">确定</a>
          <a href="javascript:;" class="btn">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modul',
  props: {
    // 弹框类型：小small、中middle、大large、表单form
    modulType: {
      type: String,
      default: 'from'
    },
    // 弹框标题
    title: String,
    // 按钮类型: 1:确定按钮 2：取消按钮 3：确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModul: Boolean
  }
}
</script>

<style lang="scss" scope>
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
@import '@/assets/style/scss/button.scss';
.modul{
  @include position(fixed);
  .mask{
    @include position(fixed);
    background: $colorI;
    opacity: 0.5;
  }
  .modul-dialog{
    @include position(absolute,40%,50%,660px,auto);
    background: crimson;
    transform: translate(-50%, -50%);
    .modul-header{
      display: flex;
      justify-content: space-between;
      height: 60px;
      line-height: 60px;
      background: $colorJ;
      padding: 0 25px;
      font-size: $fontI;
      .iconfont{
        transition: transform .3s;
        &:hover{
          transform: scale(1.5);
        }
      }
    }
    .modul-body{
      padding: 42px 40px 54px;
      font-size: $fontJ;
    }
    .modul-fotter{
      height: 82px;
      line-height: 82px;
      text-align: center;
      background: $colorJ;
    }
  }
}
</style>
