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
export default {
  name: 'home',
  components: {
    NavHeader,
    NavFotter
  }
}
</script>
