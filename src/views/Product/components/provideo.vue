<template>
  <div class="item-video">
    <div class="video-bg"></div>
    <div class="video-box">
      <div class="overlay"></div>
      <div class="video">
        <video src="/imgs/product/watch.mp4" controls poster="/imgs/product/gallery-1.png"></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pro-video'
}
</script>

<style lang="scss" scope>
  .item-video{
    .video-box{
      .video{
        video{
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
</style>
