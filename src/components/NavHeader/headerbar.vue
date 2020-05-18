<template>
  <div class="nav-header">
    <div class="container">
      <div class="header-login">
        <a href="/index"></a>
      </div>
      <div class="header-menu">
        <div class="item-menu">
          <span>小米手机</span>
          <div class="children">
            <ul>
              <li class="product" v-for="item in PhoneList" :key="item.id">
                <a :href="`/product/${item.id}`" target="_blank">
                  <div class="pro-img">
                    <img :src="item.mainImage" :alt="item.name">
                  </div>
                  <div class="pro-name">{{item.name}}</div>
                  <div class="pro-price">{{item.price | filter}}</div>
                </a>
              </li>
            </ul>
          </div>
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
  name: 'headerbar',
  props: {
    PhoneList: Array
  },
  filters: {
    filter (value) {
      if (!value) return '0.00'
      return '￥' + value.toFixed(2) + '元'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
  .nav-header{
    .container{
      position: relative;
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
          color: $colorB;
          font-size: $fontI;
          line-height: 112px;
          margin-right: $fontG;
          span{
            cursor: pointer;
          }
          &:hover{
            color: $colorA;
            .children{
              height: 230px;
              opacity: 1;
              transition: all .5s;
            }
          }
          .children{
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-bottom: 1px solid $colorH;
            box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.11);
            z-index: 10;
            transition: all .5s;
            .product{
              position: relative;
              float: left;
              width: 16.5%;
              height: 200px;
              margin: 35px 0 0;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              &:before{
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border: .5px solid $colorC;
                height: 100px;
              }
              &:last-child::before{
                display: none;
              }
              a{
                display: inline-block;
                margin-top: 10px;
                .pro-img{
                  width: 160px;
                  margin-bottom: 16px;
                  img{
                    width: 100%;
                    height: auto;
                  }
                }
                .pro-name{
                  color: $colorB;
                  font-weight: bold;
                  margin-bottom: 8px;
                }
                .pro-price{
                  color: $colorA;
                }
              }
            }
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
            padding: 0 $fontJ;
          }
          .wrapper-icon{
            width: 52px;
            text-align: center;
            span{
              font-size: $fontE;
              color: $colorB;
            }
          }
        }
      }
    }
  }
</style>
