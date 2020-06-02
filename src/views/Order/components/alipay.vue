<template>
  <div>
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from '../../../components/Loading/Loading'
import { mapState } from 'vuex'
export default {
  name: 'alipay',
  data () {
    return {
      orderId: this.$route.query.orderId,
      loading: true,
      content: ''
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.aliPay()
  },
  computed: {
    ...mapState(['payName'])
  },
  methods: {
    aliPay () {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: this.payName, // 扫码支付时订单名称
        amount: 0.01, // 单位元
        payType: 1 // 1支付宝，2微信
      }).then(value => {
        this.content = value.content
        setTimeout(() => {
          // 获取第一个form表单并且提交
          document.forms[0].submit()
        }, 1000)
      }).catch(reason => {
        console.log(reason)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
