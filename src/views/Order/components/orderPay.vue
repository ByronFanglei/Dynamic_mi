<template>
  <div class="orderpay">
    <div class="container">
      <div class="order">
        <div class="address">
          <div class="address-one">
            <div class="title">订单提交成功！去付款咯～</div>
            <div class="price">应付总额：<span>1700</span>元</div>
          </div>
          <div class="address-two">
            <div>请在<span>{{house ? house : '0'}}小时{{minutes ? minutes : '00'}}分{{seconds ? seconds : '00'}}秒</span>内完成支付, 超时后将取消订单</div>
            <div class="detail" @click="isShow = !isShow">
              订单详情
              <span class="iconfont">&#xe63e;</span>
            </div>
          </div>
          <div class="address-three" v-show="!isShow">
            <div>
              收货信息：
              {{userAddress.receiverName}}
              {{userAddress.receiverMobile | setTel}}
              {{userAddress.receiverProvince}}
              {{userAddress.receiverCity}}
              {{userAddress.receiverDistrict}}
              {{userAddress.receiverAddress}}
            </div>
          </div>
        </div>
        <div class="product" v-show="isShow">
          <div class="item">
            <div>订单号：</div>
            <div><span>{{orderId}}</span></div>
          </div>
          <div class="item">
            <div>收货信息：</div>
            <div>
              {{setAddress}}
            </div>
          </div>
          <div class="item">
            <div>商品名称：</div>
            <ul>
              <li v-for="item in orderList" :key="item.productId">{{item.productName}}</li>
            </ul>
          </div>
          <div class="item">
            <div>发票信息：</div>
            <div>电子普通发票 个人</div>
          </div>
        </div>
        <div class="iconfont hook">&#xe639;</div>
      </div>
      <div class="pay">
        <div class="title">选择以下支付方式付款</div>
        <div class="payplatform">支付平台</div>
        <div class="payimg">
          <div class="aliimg" :class="{'selected': payType == 1}" @click="pay(1)">
            <img src="/imgs/pay/icon-ali.png" alt="">
          </div>
          <div class="wechatimg" :class="{'selected': payType == 2}" @click="pay(2)">
            <img src="/imgs/pay/icon-wechat.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <pay-modul v-if="isWechatCode" :img='payImg' @wechatClose='wechatClose'></pay-modul>
    <modul
      title="支付确认"
      btnType="3"
      :showModul="showPayModul"
      sureText="查看订单"
      cancelText="未支付"
      @clear="showPayModul=false"
      @cart="goOrderList"
    >
      <template v-slot:home>
        <p>确认是否支付成功！</p>
      </template>
    </modul>
  </div>
</template>

<script>
// import session from '../../../storage'
import PayModul from '../../../components/Modul/PayModul'
import Modul from '../../../components/Modul/Modul'
import { mapState } from 'vuex'
import QRCode from 'qrcode'
export default {
  name: 'order-pay',
  data () {
    return {
      isShow: false,
      orderId: this.$route.query.orderNo, // 订单号
      orderList: [], // 订单内容
      userAddress: {}, // 地址信息
      house: '', // 倒计时小时
      minutes: '', // 倒计时分钟
      seconds: '', // 倒计时秒钟
      payType: '', // 支付类型
      payImg: '', // 微信支付二维码
      isWechatCode: false, // 是否展示微信二维码
      showPayModul: false, // 确认支付弹窗
      timer: '' // 定时器
    }
  },
  components: {
    PayModul,
    Modul
  },
  filters: {
    setTel (value) {
      if (value) {
        return value.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
      }
    }
  },
  mounted () {
    this.getOrderList()
    this.getTimeOut()
    // console.log(session.getItem('outTime'))
  },
  computed: {
    setAddress () {
      const { receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress } = this.userAddress
      return `${receiverName} ${receiverMobile} ${receiverProvince} ${receiverCity} ${receiverDistrict} ${receiverAddress}`
    },
    ...mapState(['payName'])
  },
  methods: {
    getOrderList () {
      this.axios.get(`/orders/${this.orderId}`).then(value => {
        this.orderList = value.orderItemVoList
        this.userAddress = value.shippingVo
      })
    },
    getTimeOut () {
      var date = 900 // s
      setInterval(() => {
        date--
        this.house = Math.floor(date / 60 / 60)
        this.minutes = Math.floor(date / 60)
        this.seconds = Math.floor(date % 60)
        // session.setItem('outTime', [Math.floor(date / 60 / 60), Math.floor(date / 60), Math.floor(date % 60)])
        if (date === 0) {
          this.$message.error('亲，超时啦，重新选购吧！！！')
          return this.$router.push('/index')
        }
      }, 1000)
    },
    pay (number) {
      this.payType = number
      if (number === 1) {
        // 支付宝支付
        window.open(`/order/alipay?orderId=${this.orderId}`, '_block')
      } else {
        // 微信接口
        this.axios.post('/pay', {
          orderId: this.orderId,
          orderName: this.payName, // 扫码支付时订单名称
          amount: 0.01, // 单位元
          payType: 2 // 1支付宝，2微信
        }).then(value => {
          QRCode.toDataURL(value.content).then(value => {
            this.payImg = value
            this.isWechatCode = true
            this.loopOrderPay()
          }).catch(reason => {
            console.log(reason)
          })
        }).catch(reason => {
          console.log(reason)
          this.$message.error('二维码拉去错误，请稍后重试！')
        })
      }
    },
    // 关闭微信弹窗
    wechatClose () {
      this.isWechatCode = false
      this.showPayModul = true
      clearInterval(this.timer)
    },
    // 跳转订单
    goOrderList () {
      this.$router.push('/order/list')
    },
    // 轮询当前订单支付状态
    loopOrderPay () {
      this.timer = setInterval(() => {
        this.axios.get(`/orders/${this.orderId}`).then(value => {
          if (value.status === 20) {
            clearInterval(this.timer)
            this.$message.success('付款成功')
            this.goOrderList()
          }
        }).catch(reason => {
          console.log(reason)
        })
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/config.scss';
@import '@/assets/style/scss/mixin.scss';
  .orderpay{
    background: #f5f5f5;
    padding: 38px 0;
    .container{
      .order{
        position: relative;
        background: $colorL;
        padding-left: 183px;
        padding-bottom: 30px;
        margin-bottom: 30px;
        .address{
          padding: 38px 48px 30px 0;
          font-size: $fontJ;
          color: #757575;
          .address-one{
            @include flex();
            margin-bottom: 10px;
            .title{
              font-size: $fontE;
              color: #424242;
            }
            .price{
              span{
                font-size: $fontE;
              }
            }
          }
          .address-two{
            @include flex();
            margin-bottom: 10px;
            .detail{
              cursor: pointer;
            }
          }
        }
        .product{
          border-top: 1px solid #e0e0e0;
          padding-top: 20px;
          transition: all .5s;
          .item{
            display: flex;
            line-height: 24px;
            color: $colorB;
            padding-bottom: 10px;
            div:first-child{
              width: 85px;
            }
          }
        }
        .hook{
          position: absolute;
          top: 28px;
          left: 40px;
          font-size: 100px;
          color: #83c44e;
        }
      }
      .pay{
        background: $colorL;
        padding: 30px 48px;
        .title{
          height: 50px;
          margin-bottom: 30px;
          border-bottom: 1px solid #e0e0e0;
          font-size: 18px;
        }
        .payplatform{
          margin-bottom: 15px;
          font-size: $fontI;
          font-weight: 800;
        }
        .payimg{
          display: flex;
          div{
            width: 174px;
            height: 60px;
            margin-left: 14px;
            margin-bottom: 14px;
            border: 1px solid #e0e0e0;
            cursor: pointer;
            transition: all .5s;
            img{
              width: 174px;
              height: 60px;
            }
            &:hover{
              border: 1px solid $colorA;
            }
          }
        }
      }
    }
  }
  span{
    color: $colorA;
  }
</style>
