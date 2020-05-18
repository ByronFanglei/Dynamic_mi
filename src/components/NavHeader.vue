<template>
  <div>
    <top-bar :username='username'></top-bar>
    <header-bar :PhoneList='PhoneList'></header-bar>
  </div>
</template>

<script>
import TopBar from './NavHeader/topbar'
import HeaderBar from './NavHeader/headerbar'
export default {
  name: 'nav-header',
  data () {
    return {
      username: 'byron',
      PhoneList: []
    }
  },
  components: {
    TopBar,
    HeaderBar
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then(value => {
        this.PhoneList = value.list
      })
    }
  }
}
</script>
