<template>
  <div>
    <site-fotter></site-fotter>
    <site-info></site-info>
  </div>
</template>

<script>
import SiteFotter from './components/sitefotter'
import SiteInfo from './components/siteinfo'
export default {
  name: 'nav-fotter',
  components: {
    SiteFotter,
    SiteInfo
  }
}
</script>
