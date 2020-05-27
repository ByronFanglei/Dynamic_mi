<template>
  <div class="product-box">
    <com-title></com-title>
    <div class="wrapper">
      <div class="item-left">
        <a href="javascript:;">
          <img src="/imgs/mix-alpha.jpg" alt="">
        </a>
      </div>
      <div class="item-right">
        <div class="item" v-for="item of phoneList" :key="item.id">
          <div class="item-img">
            <img v-lazy="item.mainImage" alt="">
          </div>
          <div class="item-info">
            <p class="title">{{item.name}}</p>
            <p class="desc">{{item.subtitle}}</p>
            <p class="price">
              {{item.price | filter}}
              <span class="iconfont" @click="addCart(item.id)">&#xe63f;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComTitle from '@/components/Title/Title'
export default {
  name: 'product',
  components: {
    ComTitle
  },
  props: {
    phoneList: Array
  },
  filters: {
    filter (value) {
      if (!value) return '0.00'
      return `${value}元`
    }
  },
  methods: {
    addCart (id) {
      this.$emit('modul', true)
      this.axios.post('/carts', {
        productId: id,
        selected: true
      }).then(value => {
        this.$store.dispatch('getCartcount', value.cartTotalQuantity)
      }).catch(reason => {
        console.log(reason)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/config.scss';
@import '@/assets/style/scss/mixin.scss';
  .product-box{
    @include container();
    .wrapper{
      display: flex;
      .item-left{
        transition: all .2s;
        &:hover{
          /* box-shadow: 0 15px 30px rgba(0,0,0,.1); */
          transform: translate3d(0,-2px,0);
          transition: all .2s;
        }
        a{
          img{
            width: 234px;
          }
        }
      }
      .item-right{
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        .item{
          margin: 0 0 14px 14px;
          padding: 20px 0;
          background: #fff;
          transition: all .2s;
          &:hover{
            box-shadow: 0 15px 30px rgba(0,0,0,.1);
            transform: translate3d(0,-2px,0);
            transition: all .2s;
          }
          .item-img{
            margin: 0 37px 18px;
            img{
              width: 160px;
              height: 160px;
            }
          }
          .item-info{
            .title{
              font-size: $fontJ;
              color: $colorB;
              margin: 0 10px 2px;
            }
            .desc{
              font-size: $fontK;
              color: #b0b0b0;
              margin: 0 10px 10px;
            }
            .price{
              cursor: pointer;
              font-size: $fontJ;
              color: $colorA;
              margin: 0 10px 14px;
            }
          }
        }
      }
    }
  }
</style>
