<template>
  <div class="order">
    <div class="container">
      <div class="title">
        <div class="titleone">我的订单</div>
        <div class="titletwo">请谨防钓鱼链接或诈骗电话，了解更多></div>
      </div>
      <div class="orderlist">
        <div class="listone">
          <a href="javascript:;">全部有效订单</a>
          <span class="line"></span>
          <a href="javascript:;">待支付</a>
          <span class="line"></span>
          <a href="javascript:;">待收货</a>
          <span class="line"></span>
          <a href="javascript:;">订单回收站</a>
        </div>
        <div class="listtwo">
          <input type="text" name="" placeholder="输入商品名称、订单号" />
          <span class="iconfont">&#xe604;</span>
        </div>
      </div>
      <loading v-if="isLoading"></loading>
      <not-data v-show='!isLoading && list.length == []'></not-data>
      <div class="ordercon">
        <ul>
          <li v-for="(item, index) in list" :key="index" :class="{'nopay': item.status!==20}">
            <div class="contop" :class="{'nopay nopaycontop': item.status!==20}">
              <div class="delivery" :class="{'nopaycolor': item.status!==20}">{{item.statusDesc}}</div>
              <div class="time" v-if="item.status==20">预计6月3日送达</div>
              <div class="detail">
                {{item.paymentTime ? item.paymentTime : '2020-5-1'}}
                <span class="line"></span>
                {{item.receiverName}}
                <span class="line"></span>
                订单号：<span class="changecolor" @click="copy(item.orderNo)">{{item.orderNo}}</span>
                <span class="line"></span>
                {{item.paymentTypeDesc}}
              </div>
              <div class="price">实付金额： <span>{{item.payment}}</span>元</div>
            </div>
            <div class="conbot">
              <div class="allproduct" v-for="detail in item.orderItemVoList" :key="detail.productId">
                <img v-lazy="detail.productImage" alt="">
                <div class="product">
                  <div class="procon"><span class="changecolor">{{detail.productName}}</span></div>
                  <div class="propri">{{detail.currentUnitPrice}}元 × {{detail.quantity}}</div>
                </div>
              </div>
              <div class="contact">
                <div class="btn">订单详情</div>
                <div class="btn">联系客服</div>
                <div class="btn immediatelypay" v-if="item.status!==20" @click="gotopsy(item.orderNo)">立即支付</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- <el-pagination
        class="pagestyle"
        background
        layout="prev, pager, next, jumper"
        :total="total"
        :pageSize="pageSize"
        @current-change="handleChange"
      >
      </el-pagination> -->
    </div>
    <infinite-loading
      @infinite="infiniteHandler"
      :distance="distance"
    >
      <div slot="spinner">小弟拼命加载中...</div>
      <div slot="no-more">订单已加载完毕!</div>
    </infinite-loading>
  </div>
</template>

<script>
import Loading from '../../../components/Loading/Loading'
import NotData from '../../NotFont/notdata'
// import { Pagination } from 'element-ui'
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'order-list',
  data () {
    return {
      list: [], // 全部订单
      isLoading: false,
      total: 0,
      pageSize: 10,
      pageNum: 1,
      distance: 150,
      hasNextPage: false // 是否有下一页
    }
  },
  components: {
    Loading,
    NotData,
    // [Pagination.name]: Pagination,
    InfiniteLoading
  },
  mounted () {
    this.getAllList()
  },
  methods: {
    // 点击复制订单号
    copy (content) {
      const oinput = document.createElement('input')
      oinput.value = content
      document.body.appendChild(oinput)
      oinput.select()
      document.execCommand('Copy')
      this.$message.success('订单号已复制！')
      oinput.remove()
    },
    // 获取订单信息
    getAllList () {
      this.isLoading = true
      this.axios.get('/orders', {
        params: {
          pageSize: this.pageSize,
          pageNum: this.pageNum
        }
      }).then(value => {
        this.list = value.list
        this.total = value.total
        this.pageSize = value.pageSize
        this.hasNextPage = value.hasNextPage
        this.isLoading = false
      })
    },
    // 立即支付
    gotopsy (orderNo) {
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      })
    },
    // 分页变化 one
    handleChange (pageNum) {
      this.pageNum = pageNum
      this.getAllList()
    },
    // 滚动分页
    infiniteHandler ($state) {
      this.axios.get('/orders', {
        params: {
          pageSize: 10,
          pageNum: this.pageNum
        }
      }).then(value => {
        if (value.hasNextPage) {
          this.pageNum++
          this.list = this.list.concat(value.list)
          this.total = value.total
          this.isLoading = false
          this.$message.warning('正在加载订单中')
          $state.loaded()
        } else {
          this.$message.success('订单已全部加载完成！！！')
          $state.complete()
        }
      }).catch(reason => {
        console.log(reason)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/button.scss';
@import '@/assets/style/scss/config.scss';
@import '@/assets/style/scss/element-variables.scss';
  .order{
    background: #f5f5f5;
    padding-top: 40px;
    .container{
      background: $colorL;
      padding: 30px 40px;
      box-sizing: border-box;
      .title{
        display: flex;
        color: #757575;
        font-weight: 400;
        line-height: 68px;
        .titleone{
          font-size: 30px;
          margin-right: 10px;
        }
        /* .titletwo{
          display: table-cell;
          vertical-align: bottom;
        } */
      }
      .orderlist{
        display: flex;
        font-size: $fontI;
        padding: 18px 0;
        a{
          color: #757575;
          &:hover{
            color: $colorA;
          }
        }
        .listone{
          flex: 2;
          line-height: 40px;
          .line{
            margin: 0 20px !important;
          }
        }
        .listtwo{
          flex: 1;
          display: flex;
          justify-content: flex-end;
          input{
            height: 40px;
            line-height: 40px;
            border: 1px solid $colorE;
            border-right: none;
            padding: 0 15px;
          }
          span{
            display: block;
            height: 40px;
            width: 40px;
            line-height: 40px;
            text-align: center;
            border: 1px solid $colorE;
          }
        }
      }
      .ordercon{
        ul{
          li{
            padding: 25px 30px;
            font-size: $fontJ;
            color: #757575;
            margin-bottom: 20px;
            border: 1px solid #83c44e;
            overflow: hidden;
            .contop{
              border: 1px solid #83c44e;
              padding: 10px;
              background: #fbfff6;
              .delivery{
                font-size: $fontH;
                color: #83c44e;
              }
              .price{
                text-align: right;
                span{
                  display: inline-block;
                  margin-right: 5px;
                  font-size: $fontC;
                  color: $colorB;
                }
              }
            }
            .conbot{
              .allproduct{
                display: flex;
                line-height: 80px;
                img{
                  width: 80px;
                  display: inline-block;
                  margin-right: 30px;
                }
                .product{
                  display: flex;
                  div{
                    margin-right: 20px;
                  }
                }
              }
            }
            .contact{
              float: right;
              margin-bottom: 10px;
              .btn{
                color: #757575;
                border: 1px solid #b0b0b0;
                margin-left: 20px;
              }
            }
          }
        }
      }
    }
  }
  .nopay{
    border: 1px solid $colorA !important;
  }
  .nopaycontop{
    background: #fffaf7 !important;
  }
  .nopaycolor{
    color: $colorA !important;
  }
  .immediatelypay{
    background: $colorA;
    color: $colorL !important;
    border: 1px solid $colorA !important;
    &:hover{
      background: #f25807;
    }
  }
  .pagestyle{
    padding-top: 50px;
    text-align: center;
  }
</style>
