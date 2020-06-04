<template>
  <div>
    <nav-header></nav-header>
    <div class="container">
      <img src="/imgs/404.jpg" alt="">
    </div>
    <nav-fotter></nav-fotter>
  </div>
</template>

<script>
import NavHeader from '../../components/NavHeader/NavHeader'
import NavFotter from '../../components/NavFotter/NavFotter'
export default {
  name: 'not-fount',
  components: {
    NavHeader,
    NavFotter
  },
  mounted () {
    this.$message.error('亲、页面找不到啦！！！')
  }
}
</script>

<style lang="scss" scoped>
  .container{
    img{
      display: block;
      margin: 0 auto;
    }
  }

</style>
