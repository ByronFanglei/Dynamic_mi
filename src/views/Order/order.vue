<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <nav-fotter></nav-fotter>
  </div>
</template>

<script>
import OrderHeader from '../../components/OrderHeader'
import NavFotter from '../../components/NavFotter'
export default {
  name: 'order',
  components: {
    OrderHeader,
    NavFotter
  }
}
</script>
