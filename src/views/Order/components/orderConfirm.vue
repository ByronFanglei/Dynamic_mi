<template>
  <div class="confirm">
    <div class="container clearfix">
      <div class="address">
        <div class="addtitle">收货地址</div>
        <!-- 地址内容 -->
        <ul class="addcontent" :class="{'addhident': addressbar}">
          <!-- 单个地址 -->
          <li class="addinfo" :class="{'selected':index == checkIndex}" @click="checkIndex = index" v-for="(item, index) in list" :key="item.id">
            <div class="site">
              <div class="site-name">{{item.receiverName}}</div>
              <div class="site-tel">{{item.receiverMobile | setTel}}</div>
              <div class="site-content">
                <p>
                  <span>{{item.receiverProvince}}</span>
                  <span>{{item.receiverCity}}</span>
                  <span>{{item.receiverDistrict}}</span>
                </p>
                <p>{{item.receiverAddress}}</p>
              </div>
              <div class="edit" @click="editAddress(item)">
                <span>修改</span>
              </div>
              <div class="delete" @click="delAddress(item)">
                <span>删除</span>
              </div>
            </div>
          </li>
          <!-- 添加新地址 -->
          <li class="addinfo new" @click="openNewAddress">
            <div class="newaddress">
              <span class="iconfont">&#xe612;</span>
              <p>添加新地址</p>
            </div>
          </li>
        </ul>
        <!-- 收起地址条 -->
        <div class="addressbar" @click="togger" v-show="list.length > 3">
          {{addressbar ? '收起更多收货地址' : '展开更多收货地址'}}
        </div>
      </div>
      <div class="discount">
        <div class="title">商品及优惠券</div>
        <ul class="product">
          <li class="singlepro" v-for="item in cartList" :key="item.id">
            <div class="proimg">
              <img v-lazy="item.productMainImage" alt="">
            </div>
            <div class="proname">{{item.productName}} {{item.productSubtitle}}</div>
            <div class="proprice">
              <span>{{item.productPrice | setPrice}} x {{item.quantity}}</span>
              <span>{{item.productTotalPrice | setPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="courier">
        <div>配送方式</div>
        <div>{{cartTotalPrice > 1999 ? '包邮' : '不包邮'}}</div>
      </div>
      <div class="price">
        <div class="title">总计</div>
        <div class="details clearfix">
          <div class="detail-right">
            <div class="detail-single">
              <span>商品件数：</span>
              <span>{{count}}件</span>
            </div>
            <div class="detail-single">
              <span>商品总价：</span>
              <span>{{cartTotalPrice | setPrice}}</span>
            </div>
            <div class="detail-single">
              <span>活动优惠：</span>
              <span>-0元</span>
            </div>
            <div class="detail-single">
              <span>优惠券抵扣：</span>
              <span>-0元</span>
            </div>
            <div class="detail-single">
              <span>运费：</span>
              <span>0元</span>
            </div>
            <div class="detail-single">
              <span>应付总额：</span>
              <span><b>{{cartTotalPrice}}</b>元</span>
            </div>
          </div>
        </div>
      </div>
      <div class="settlement">
        <div class="btn-group">
          <div class="btn btn-default gocart" @click="gotoCart">返回购物车</div>
          <div class="btn btn-default" @click="orderSubmit">去结算</div>
        </div>
      </div>
    </div>
    <modul
      title='删除确认'
      btnType='1'
      :showModul='showModul'
      @cart='submitAddress'
      @clear='showModul = false'
    >
      <template v-slot:home>
        <p>确定要删除地址吗！</p>
      </template>
    </modul>
    <modul
      :title='EAaddress'
      :showModul='NewaddshowModul'
      @cart='submitAddress'
      @clear='NewaddshowModul = false'
    >
      <template v-slot:home>
        <div class="wrapper">
          <div class="item">
            <div class="slipeitem">
                <label for="username" :class="{'selectlaber': isUsername}">姓名</label>
                <input type="text" id="username" :class="{'selectinp': isUsername}" v-model="username" @focus="FocusName" @blur="FocusName">
            </div>
            <div class="slipeitem">
                <label for="tel" :class="{'selectlaber': isTel}">手机号</label>
                <input type="text" id="tel" :class="{'selectinp': isTel}" v-model="tel" @focus="FocusTel" @blur="FocusTel">
            </div>
          </div>
          <div class="item city">
            <select name="" v-model="selectProvinces" @change="getProIdx">
              <option value="">-请选择省份-</option>
              <option :value="index" v-for="(item, index) in allProvinces" :key="index">{{item}}</option>
            </select>
            <select name="" v-model="selectCity" @change="getCityInx">
              <option value="">-请选择城市-</option>
              <option :value="item" v-for="(item, index) in itemCity" :key="index">{{item}}</option>
            </select>
            <select name="" v-model="selectCounty" @change="getAddress">
              <option value="">-请选择县城-</option>
              <option :value="item" v-for="(item, index) in county" :key="index">{{item}}</option>
            </select>
          </div>
          <div class="item detailadd">
            <div class="slipeitem">
              <textarea name="" id='detailadd' placeholder="详细地址" v-model="detailAddress" @focus="FocusDetailAddress" @blur="FocusDetailAddress"></textarea>
            </div>
          </div>
          <div class="item addlab">
            <div class="slipeitem">
                <label for="addlab" :class="{'selectlaber': isAddressLab}">邮编</label>
                <input type="text" id="addlab" :class="{'selectinp': isAddressLab}" v-model="addressLab" @focus="FocusAddressLab" @blur="FocusAddressLab">
            </div>
          </div>
        </div>
      </template>
    </modul>
  </div>
</template>

<script>
import Modul from '../../../components/Modul/Modul'
export default {
  name: 'order-confirm',
  data () {
    return {
      list: [], // 收获地址列表
      cartList: [], // 购物车中需要结算的商品列表
      cartTotalPrice: 0, // 商品总金额
      count: 0, // 商品总数量
      checkItem: {}, // 当前选中的地址
      userAction: '', // 用户行为 0：新增 1：编辑 2：删除
      addressbar: true,
      showModul: false,
      NewaddshowModul: false,
      isUsername: false,
      username: '',
      isTel: false,
      tel: '',
      isDetailAddress: false,
      detailAddress: '',
      isAddressLab: false,
      addressLab: '',
      allProvinces: [], // 所有省份
      selectProvinces: '', // 当前省份下标
      allCity: [], // 获取全部城市
      itemCity: [], // 获取当前城市
      selectCity: '', // 当前城市名称
      county: [], // 当前所对应的县城
      selectCounty: '', // 当前选择的县城
      EAaddress: '', // 添加地址与修改地址title
      checkIndex: 0 // 当前地址索引
    }
  },
  components: {
    Modul
  },
  filters: {
    setTel (value) {
      if (value) {
        return value.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
      }
    },
    setPrice (value) {
      return `${value}元`
    }
  },
  mounted () {
    this.getAddressList()
    this.getCartList()
    this.getProvinces()
  },
  methods: {
    getAddressList () {
      this.axios.get('/shippings').then(value => {
        this.list = value.list
      })
    },
    getCartList () {
      this.axios.get('/carts').then(value => {
        // 获取购物车的商品数据
        const list = value.cartProductVoList
        this.cartTotalPrice = value.cartTotalPrice
        this.cartList = list.filter(item => item.productSelected)
        this.cartList.map(item => {
          this.count += item.quantity
        })
      })
    },
    // 切换地址条
    togger () {
      this.addressbar = !this.addressbar
    },
    gotoCart () {
      this.$router.push('/cart')
    },
    // 删除地址
    delAddress (item) {
      this.checkItem = item
      this.userAction = 2
      this.showModul = true
    },
    // 新增地址
    openNewAddress () {
      this.checkItem = {}
      this.userAction = 0
      this.NewaddshowModul = true
      this.EAaddress = '添加收货地址'
    },
    // 编辑地址
    editAddress (item) {
      this.checkItem = item
      this.userAction = 1
      this.NewaddshowModul = true
      this.EAaddress = '修改收货地址'
      this.username = item.receiverName
      this.tel = item.receiverMobile
      this.selectProvinces = item.receiverProvince
      this.detailAddress = item.receiverAddress
      this.addressLab = item.receiverZip
      this.isUsername = true
      this.isTel = true
      this.isAddressLab = true
    },
    // 删除，提交，编辑地址
    submitAddress () {
      const { checkItem, userAction } = this
      let method, url
      let params = {}
      if (userAction === 2) {
        // 删除地址
        method = 'delete'
        url = `/shippings/${checkItem.id}`
      } else if (userAction === 1) {
        // 编辑地址
        method = 'put'
        url = `/shippings/${checkItem.id}`
      } else {
        // 添加地址
        method = 'post'
        url = '/shippings'
      }
      if (userAction === 0 || userAction === 1) {
        const { username, tel, selectProvinces, selectCity, selectCounty, detailAddress, addressLab } = this
        let errMeg = ''
        if (!username) {
          errMeg = '亲！名字输一下！！！'
        } else if (!tel || !/^1[345789]\d{9}$/.test(tel)) {
          errMeg = '要么你没写电话，要么你电话写的不对，自个瞅瞅！'
        } else if (!this.allProvinces[selectProvinces]) {
          errMeg = '省份选一哈'
        } else if (!selectCity) {
          errMeg = '城市选一哈'
        } else if (!selectCounty) {
          errMeg = '小县城选一哈'
        } else if (!detailAddress) {
          errMeg = '地址不写，咋给你送货了'
        } else if (!addressLab || !/^[0-9]{6}$/.test(addressLab)) {
          errMeg = '邮编！邮编！邮编！'
        }
        if (errMeg) {
          this.$message.error(errMeg)
          return
        }
        params = {
          receiverName: username,
          receiverMobile: tel,
          receiverProvince: this.allProvinces[selectProvinces],
          receiverCity: selectCity,
          receiverDistrict: selectCounty,
          receiverAddress: detailAddress,
          receiverZip: addressLab
        }
      }
      this.axios[method](url, params).then(value => {
        this.closeModul()
        // 重新拉取地址信息
        this.getAddressList()
        this.$message.success('操作成功！！！')
      })
    },
    // 关闭弹框事件，清理数据
    closeModul () {
      this.showModul = false
      this.NewaddshowModul = false
      this.checkItem = {}
      this.userAction = ''
    },
    FocusName () {
      this.isUsername = this.renderFocus(this.isUsername, this.username)
    },
    FocusTel () {
      this.isTel = this.renderFocus(this.isTel, this.tel)
    },
    FocusDetailAddress () {
      this.isDetailAddress = this.renderFocus(this.isDetailAddress, this.detailAddress)
    },
    FocusAddressLab () {
      this.isAddressLab = this.renderFocus(this.isAddressLab, this.addressLab)
    },
    renderFocus (boole, value) {
      boole = !boole
      if (value.trim().length !== 0) {
        boole = true
      }
      return boole
    },
    getProvinces () {
      this.axios.get('http://localhost:8080/json/city.json').then(value => {
        for (const key in value) {
          // 获取全部省份
          this.allProvinces.push(key)
          // 获取全部的城市
          this.allCity.push(value[key])
        }
      })
    },
    getProIdx () {
      // 先将之前的数据清空，否则出现叠加问题
      this.itemCity = []
      for (const key in this.allCity[this.selectProvinces]) {
        this.itemCity.push(key)
      }
    },
    getCityInx () {
      this.county = this.allCity[this.selectProvinces][this.selectCity]
    },
    getAddress () {
      // 获取当前用户选择的地址
      // console.log(this.allProvinces[this.selectProvinces], this.selectCity, this.selectCounty)
    },
    // 提交订单
    orderSubmit () {
      const item = this.list[this.checkIndex]
      if (!item) {
        this.$message.error('请选择一个收获地址！')
        return
      }
      this.axios.post('/orders', {
        shippingId: item.id
      }).then(value => {
        this.$router.push({
          path: '/order/pay',
          query: {
            orderNo: value.orderNo
          }
        })
        this.$store.dispatch('getPayName', value.orderItemVoList[0].productName)
      }).catch(reason => {
        console.log(reason)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/config.scss';
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/button.scss';
  .confirm{
    background: #f5f5f5;
    padding-top: 40px;
    .container{
      padding: 48px 24px 0;
      background: $colorL;
      .addtitle{
        font-size: $fontH;
        color: $colorB;
        font-weight: 500;
        margin-bottom: 20px;
      }
      .addhident{
        height: auto !important;
      }
      .addcontent{
        display: flex;
        flex-wrap: wrap;
        height: 202px;
        overflow: hidden;
        /* transition: all .5s; */
        .addinfo{
          position: relative;
          margin: 0 17px 20px 0;
          border: 1px solid #e0e0e0;
          width: 268px;
          height: 180px;
          font-size: $fontJ;
          color: #757575;
          transition: all .5s;
          cursor: pointer;
          .site{
            padding: 15px 24px 0;
            .site-name{
              font-size: $fontH;
              color: $colorB;
              margin-bottom: 10px;
            }
            .edit{
              position: absolute;
              right: 14px;
              bottom: 10px;
              opacity: 0;
              color: $colorA;
              transition: all .5s;
              text-align: right;
            }
            .delete{
              position: absolute;
              left: 14px;
              bottom: 10px;
              opacity: 0;
              color: $colorA;
              transition: all .5s;
              text-align: left;
            }
          }
          &:hover{
            border: 1px solid $colorD;
            .edit{
              opacity: 1;
            }
            .delete{
              opacity: 1;
            }
          }
        }
        .new{
          @include flex();
          .newaddress{
            text-align: center;
            margin: 0 auto;
            font-size: $fontH;
            .iconfont{
              font-size: $fontE;
            }
          }
          &:hover{
            color: $colorA;
          }
        }
      }
      .addressbar{
        background: #eee;
        color: #424242;
        height: 50px;
        line-height: 50px;
        width: 1178px;
        text-align: center;
        cursor: pointer;
        font-size: $fontJ;
        margin-bottom: 30px;
      }
      .title{
        font-size: $fontH;
        color: $colorB;
      }
      .discount{
        width: 1178px;
        .product{
          padding: 5px 0;
          .singlepro{
            padding: 10px 0;
            display: flex;
            font-size: $fontJ;
            color: #424242;
            height: 66px;
            line-height: 66px;
            .proimg{
              img{
                width: 30px;
                vertical-align: middle;
              }
            }
            .proname{
              flex: 3;
              padding-left: 20px;
            }
            .proprice{
              flex: 2;
              display: flex;
              justify-content: space-between;
              span{
                display: inline-block;
                margin: 0 20px;
              }
              span:last-of-type{
                color: $colorA;
              }
            }
          }
        }
      }
      .courier{
        display: flex;
        height: 40px;
        line-height: 40px;
        padding: 25px 0;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        div:first-of-type{
          flex: 1;
          color: $colorB;
          font-size: $fontH;
        }
        div:last-of-type{
          flex: 6;
          color: $colorA;
          font-size: $fontJ;
        }
      }
      .price{
        border-bottom: 1px solid $colorH;
        .title{
          padding: 25px 0;
        }
        .detail-right{
          float: right;
          font-size: $fontJ;
          color: #767676;
          line-height: 2;
          text-align: right;
          .detail-single{
            span{
              display: inline-block;
            }
            span:first-of-type{
              width: 126px;
            }
            span:last-of-type{
              width: 84px;
              color: $colorA;
            }
            b{
              font-size: 30px;
            }
          }
        }
      }
      .settlement{
        float: right;
        padding: 20px 48px;
        .btn-group{
          .gocart{
            background: $colorG !important;
            border: 1px solid #808080;
            color: #808080;
          }
          .btn-default{
            background: $colorA;
          }
        }
      }
    }
    .wrapper{
      .item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .slipeitem{
          position: relative;
          width: 234px;
          margin: 0 20px 0 0;
          label{
            position: absolute;
            left: 10px;
            bottom: 12px;
            cursor: text;
            transition: all .3s;
            color: #b0b0b0;
          }
          input{
            height: 40px;
            width: 100%;
            border:none;
            outline: none;
            border: 1px solid #c3c3c3;
            padding: 0 10px;
            border-radius: 4px;
            color: #b0b0b0;
          }
        }
      }
      .addlab{
        .slipeitem{
          width: 620px;
        }
      }
      .detailadd{
        border: 1px solid #c3c3c3;
        .slipeitem{
          width: 620px;
          label{
            bottom: 15px !important;
          }
          textarea{
            resize: none;
            width:100%;/*自动适应父布局宽度*/
            overflow:auto;
            word-break:break-all;
            color: #b0b0b0;
            padding: 10px 10px;
            border: none;
          }
        }
      }
      .city{
        display: flex;
        position: relative;
        vertical-align: middle;
        padding: 0;
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c3c3c3;
        text-shadow: none;
        border-radius: 4px;
        transition: box-shadow 0.25s ease;
        z-index: 2;
        &:hover{
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
        }
        select{
          flex: 1;
          margin-right: 10px;
          height: 42px;
          cursor: pointer;
          padding: 10px;
          border: none;
          background: transparent;
          background-image: none;
          color: #c3c3c3;
          &:focus {
            outline: none;
          }
          option{
            text-indent: 10px;
            margin-top: 1px;
            width: 249px;
            color: black;
            line-height: 25px;
            border: 1px #cfcfcf solid;
          }
        }
      }
    }
    .selected{
      border: 1px solid $colorA;
      color: $colorA;
    }
    .selectlaber{
      bottom: 33px !important;
      color: $colorA !important;
      font-size: $fontK;
      background-color: $colorG;
      padding: 0 5px;
    }
    .selectinp{
      border: 1px solid $colorA !important;
    }
  }
</style>
