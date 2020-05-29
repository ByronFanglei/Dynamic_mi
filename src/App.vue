<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartProduct()
    }
  },
  methods: {
    getUser () {
      this.axios.get('/user').then((value = {}) => {
        this.$store.dispatch('getUsername', value.username)
      }).catch(reason => {
        console.log(reason)
      })
    },
    getCartProduct () {
      this.axios.get('/carts/products/sum').then((value = 0) => {
        this.$store.dispatch('getCartcount', value)
      }).catch(reason => {
        console.log(reason)
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/scss/reset.scss';
</style>
