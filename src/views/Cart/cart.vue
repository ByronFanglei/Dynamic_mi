<template>
  <div>
    <order-header title='我的购物车'>
      <template v-slot:mes>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper" v-if="list.length > 0">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1">
            <span class="allchoose" :class="{'choose': allChecked}" @click="allChoose" ref="icon"></span>全选</li>
            <li class="col-1"></li>
            <li class="col-2">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="item in list" :key="item.productId">
              <div class="itemchoose">
                <span :class="{'chooseRadio':item.productSelected,'notChose':!item.productSelected}" @click="numProduct(item, '1')"></span>
              </div>
              <div class="proimg">
                <img :src="item.productMainImage" alt="">
              </div>
              <div class="name">{{item.productName}}</div>
              <div class="price">{{item.productPrice | completePrice}}</div>
              <div class="number">
                <a href="javascript:;" @click="numProduct(item, '+')">
                  <span class="iconfont">&#xe63e;</span>
                </a>
                <input type="text" name="" :value="item.quantity" disabled>
                <a href="javascript:;" @click="numProduct(item, '-')">
                  <span class="iconfont">&#xe612;</span>
                </a>
              </div>
              <div class="subtotal">{{item.productTotalPrice | completePrice}}</div>
              <div class="itemdel" @click="delPro(item)"><span class="iconfont">&#xe668;</span></div>
            </li>
          </ul>
        </div>
        <div class="cart-bar">
          <div class="bar-left">
            <a href="javascript:;">继续购物</a>
            <span class="line"></span>
            <a href="javascript:;">共 <span>{{this.list.length}}</span> 件商品，已选择 <span>{{checkedNum.length}}</span> 件</a>
          </div>
          <div class="bar-right">
            <div href="javascript:;">合计：<span>{{cartTotalPrice}}</span>元</div>
            <div class="btn-huge" :class="{'hightLight': this.cartTotalPrice != 0}" @click="orderPay">去支付</div>
          </div>
        </div>
      </div>
    </div>
    <not-product v-if="list.length == 0"></not-product>
    <modul
      title='提示'
      sureText='确定'
      btnType='2'
      modulType='middle'
      :showModul='showModul'
      @cart='realDelPro()'
      @clear='handMoudl($event)'
    >
      <template slot="home">
        <p>确认要删除吗？</p>
      </template>
    </modul>
    <nav-fotter></nav-fotter>
  </div>
</template>

<script>
import OrderHeader from '../../components/OrderHeader/OrderHeader'
import NavFotter from '../../components/NavFotter/NavFotter'
import Modul from '../../components/Modul/Modul'
import NotProduct from './components/notproduct'
export default {
  name: 'cart',
  components: {
    OrderHeader,
    NavFotter,
    Modul,
    NotProduct
  },
  data () {
    return {
      list: [], // 商品列表
      allChecked: false, // 是否全选
      cartTotalPrice: 0, // 商品总金额
      checkedNum: 0, // 选中商品数量
      delproduct: {}, // 当前需要删除的商品
      showModul: false
    }
  },
  mounted () {
    this.getCartList()
  },
  methods: {
    allChoose () {
      const url = this.allChecked ? '/carts/unSelectAll' : '/carts/selectAll'
      this.axios.put(url).then(value => {
        this.randerData(value)
      }).catch(reason => {
        console.log(reason)
      })
      if (this.allChecked) {
        // this.$refs.icon.innerHTML = '&#xe77b;'
        this.allChecked = false
      } else {
        // this.$refs.icon.innerHTML = '&#xe793;'
        this.allChecked = true
      }
    },
    getCartList () {
      this.axios.get('/carts').then(value => {
        this.randerData(value)
      }).catch(reason => {
        console.log(reason)
      })
    },
    randerData (res) {
      this.list = res.cartProductVoList || []
      this.allChecked = res.selectedAll
      this.cartTotalPrice = res.cartTotalPrice
      this.checkedNum = this.list.filter(item => item.productSelected)
    },
    // 商品添加
    numProduct (item, type) {
      let quantity = item.quantity
      let selected = item.productSelected
      if (type === '+') {
        if (quantity === 1) {
          this.$message.warning('商品不能少于一件呦！')
          return
        }
        --quantity
      } else if (type === '-') {
        if (quantity > item.productStock) {
          this.$message.warning('存货不足啦！')
          return
        }
        ++quantity
      } else {
        selected = !item.productSelected
      }
      this.axios.put(`/carts/${item.productId}`, {
        quantity,
        selected
      }).then(value => {
        this.randerData(value)
      }).catch(reason => {
        console.log(reason)
      })
    },
    // 删除产品
    delPro (item) {
      this.showModul = true
      this.delproduct = item
    },
    realDelPro () {
      this.showModul = false
      const productId = this.delproduct.productId
      this.axios.delete(`/carts/${productId}`, {
        productId
      }).then(value => {
        this.randerData(value)
      }).catch(reason => {
        console.log(reason)
      })
      this.$message.success('删除成功！！！')
    },
    handMoudl (e) {
      this.showModul = e
      this.$message.warning('呦呵！你好皮哇！！！')
    },
    // 支付跳转
    orderPay () {
      const isCheck = this.list.every(item => !item.productSelected)
      if (isCheck) {
        this.$message.warning('不买东西，咋给你算钱哇！！！！！')
      } else {
        this.$router.push('/order/confirm')
      }
    }
  },
  filters: {
    completePrice (price) {
      return `${price}元`
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/config.scss';
@import '@/assets/style/scss/button.scss';
@import '@/assets/style/scss/mixin.scss';
  .wrapper{
    background: #f5f5f5;
    padding: 38px 0;
    .container{
      .cart-box{
        background-color: $colorG;
        font-size: $fontJ;
        color: #424242;
        text-align: center;
        .cart-item-head{
          padding: 15px 26px 15px 0;
          display: flex;
          height: 70px;
          line-height: 70px;
          .iconfont{
            display: inline-block;
            margin: 0 15px 0 24px;
            font-size: $fontH;
            cursor: pointer;
          }
          .col-1{
            flex: 1;
            .allchoose{
              display: inline-block;
              width: 20px;
              height: 20px;
              border: 1px solid #ccc;
              vertical-align: middle;
              margin-right: 5px;
            }
          }
          .col-2{
            flex: 2;
          }
          .col-3{
            flex: 3;
          }
        }
        .cart-item-list{
          padding: 15px 26px 15px 0;
          border-top: 1px solid #e0e0e0;
          .cart-item{
            display: flex;
            align-items: center;
            color: #424242;
            .itemchoose{
              flex: 1;
              font-size: $fontH;
              cursor: pointer;
            }
            .proimg{
              flex: 1;
              img{
                width: 80px;
                height: 80px;
              }
            }
            .name{
              flex: 2;
              font-size: $fontH;
            }
            .price{
              flex: 1;
              font-size: $fontI;
            }
            .number{
              flex: 2;
              a{
                display: inline-block;
                width: 38px;
                height: $fontB;
                line-height: 36px;
                padding: 0;
                border-width: 0;
                color: #424242;
                font-size: $fontI;
                text-align: center;
                border-top: 1px solid $colorE;
                border-bottom: 1px solid $colorE;
                border-left: 1px solid $colorE;
                &:hover{
                  background: $colorE;
                }
              }
              a:last-of-type{
                border-right: 1px solid $colorE;
                border-left: none;
              }
              input{
                width: 72px;
                height: $fontB;
                line-height: $fontB;
                padding: 0;
                border-width: 0;
                color: #424242;
                font-size: $fontI;
                text-align: center;
                border-top: 1px solid $colorE;
                border-bottom: 1px solid $colorE;
              }
            }
            .subtotal{
              flex: 1;
              font-size: $fontI;
              color: $colorA;
            }
            .itemdel{
              flex: 1;
              cursor: pointer;
              transition: all .2s;
              &:hover{
                transform: scale(1.2);
                color: $colorA;
              }
            }
          }
        }
      }
      .cart-bar{
        font-size: $fontJ;
        margin-top: 12px;
        @include flex();
        background: $colorL;
        span{
          color: $colorA;
        }
        .bar-left{
          margin-left: 32px;
          a{
            color: #757575;
          }
        }
        .bar-right{
          @include flex();
          span{
            font-size: 30px;
          }
          .btn-huge{
            margin-left: 50px;
            background: #e0e0e0;
          }
          .hightLight{
            background: $colorA !important;
            color: $colorL;
          }
        }
      }
    }
  }
  .choose{
    color: $colorA;
    background: $colorA;
    /* display: inline !important; */
  }
  .notChose{
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px dotted $colorA;
  }
  .chooseRadio{
    display: inline-block;
    width: 20px;
    height: 20px;
    background: $colorA;
  }
</style>
