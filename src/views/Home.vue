<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-fotter></nav-fotter>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader/NavHeader'
import NavFotter from '../components/NavFotter/NavFotter'
// import jsonp from 'jsonp'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavFotter
  },
  mounted () {
    // this.axios.get('/product').then(value => {
    //   console.log(value)
    // }).catch(reason => {
    //   console.log(reason)
    // })
    // jsonp('101.200.45.124:9001/product', (erro, res) => {
    //   console.log(res)
    // })
  }
}
</script>
