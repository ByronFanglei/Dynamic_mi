<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import storage from './storage'
export default {
  mounted () {
    // storage.setItem('qqq', { qq: 1 }, 'abc')
    storage.clear('qq', 'qqq')
  }
}
</script>

<style lang="scss">
@import '@/assets/style/scss/reset.scss';
</style>
