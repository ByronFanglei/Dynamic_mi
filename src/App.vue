<template>
  <div id="app">
    <router-view v-if="isRouterCiew"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterCiew: true
    }
  },
  mounted () {
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartProduct()
    }
  },
  methods: {
    reload () {
      this.isRouterCiew = false
      // DOM更新后后执行$nextTick
      this.$nextTick(() => {
        this.isRouterCiew = true
      })
    },
    getUser () {
      this.axios.get('/user').then((value = {}) => {
        this.$store.dispatch('getUsername', value.username)
      }).catch(reason => {
        console.log(reason)
      })
    },
    getCartProduct () {
      this.axios.get('/carts/products/sum').then((value = 0) => {
        // console.log(value)
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
