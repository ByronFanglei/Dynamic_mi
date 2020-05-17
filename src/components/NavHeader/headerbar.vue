<template>
  <div class="nav-header">
    <div class="container">
      <div class="header-login">
        <a href="/index"></a>
      </div>
      <div class="header-menu">
        <div class="item-menu">
          <span>小米手机</span>
          <div class="children"></div>
        </div>
        <div class="item-menu">
          <span>Redmi 红米</span>
          <div class="children"></div>
        </div>
        <div class="item-menu">
          <span>电视</span>
          <div class="children"></div>
        </div>
      </div>
      <div class="header-search">
        <div class="wrapper">
          <input type="text" name="keyword">
          <div class="wrapper-icon">
            <span href="javascript:;" class="iconfont">&#xe604;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerbar'
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/mixin.scss';
  .nav-header{
    .container{
      height: 112px;
      @include flex();
      .header-login{
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6700;
        a{
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before{
            content: '';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-logo.png') no-repeat center;
            background-size: 55px;
            transition: margin .2s;
          }
          &:after{
            content: '';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-home.png') no-repeat center;
            background-size: 55px;
          }
          &:hover:before{
            margin-left: -55px;
            transition: margin .2s;
          }
        }
      }
      .header-menu{
        display: inline-block;
        width: 665px;
        padding-left: 209px;
        .item-menu{
          display: inline-block;
          color: #333;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span{
            cursor: pointer;
          }
        }
      }
      .header-search{
        width: 297px;
        .wrapper{
          height: 50px;
          border: 1px solid #e0e0e0;
          @include flex('');
          input{
            box-sizing: border-box;
            border: none;
            width: 245px;
            height: 50px;
            border-right: 1px solid #e0e0e0;
            padding: 0 14px;
          }
          .wrapper-icon{
            width: 52px;
            text-align: center;
            span{
              font-size: 24px;
              color: #333;
            }
          }
        }
      }
    }
  }
</style>
