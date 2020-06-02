<template>
  <div>
    <order-header :title="title">
      <template v-slot:mes>
        <span>{{mes}}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <nav-fotter></nav-fotter>
  </div>
</template>

<script>
import OrderHeader from '../../components/OrderHeader/OrderHeader'
import NavFotter from '../../components/NavFotter/NavFotter'
export default {
  name: 'order',
  data () {
    return {
      mes: '',
      title: ''
    }
  },
  components: {
    OrderHeader,
    NavFotter
  },
  mounted () {
    const path = this.$route.path
    if (path === '/order/confirm') {
      this.mes = '谨防诈骗'
      this.title = '确认订单'
    } else if (path === '/order/list') {
      this.mes = '谨防诈骗，谨防钓鱼连接'
      this.title = '订单列表'
    } else if (path === '/order/pay') {
      this.mes = '谨防诈骗，谨防钓鱼连接'
      this.title = '订单支付'
    } else {
      this.mes = '谨防诈骗，谨防钓鱼连接'
      this.title = '订单支付'
    }
  }
}
</script>
