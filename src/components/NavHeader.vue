<template>
  <div>
    <top-bar></top-bar>
    <header-bar></header-bar>
  </div>
</template>

<script>
import TopBar from './NavHeader/topbar'
import HeaderBar from './NavHeader/headerbar'
export default {
  name: 'nav-header',
  components: {
    TopBar,
    HeaderBar
  }
}
</script>
