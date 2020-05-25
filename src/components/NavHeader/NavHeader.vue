<template>
  <div>
    <top-bar :username='username'></top-bar>
    <header-bar :PhoneList='PhoneList'></header-bar>
  </div>
</template>

<script>
import TopBar from './components/topbar'
import HeaderBar from './components/headerbar'
import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  data () {
    return {
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
  },
  computed: {
    ...mapState(['username'])
  }
}
</script>
