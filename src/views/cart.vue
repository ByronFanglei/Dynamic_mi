<template>
  <div>
    <order-header></order-header>
    cart
    <nav-fotter></nav-fotter>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFotter from '../components/NavFotter'
export default {
  name: 'cart',
  components: {
    OrderHeader,
    NavFotter
  }
}
</script>
