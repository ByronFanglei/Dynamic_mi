<template>
  <div class="item-video">
    <div class="video-bg" @click="showSlide=true"></div>
    <div class="video-box">
      <div class="overlay" v-if="showSlide"></div>
      <div class="video" :class="{'slide':showSlide}">
        <span class="iconfont" @click="showSlide=false">&#xe639;</span>
        <video src="/imgs/product/watch.mp4" muted autoplay controls poster="/imgs/product/gallery-1.png"></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pro-video',
  data () {
    return {
      showSlide: false
    }
  }
}
</script>

<style lang="scss" scope>
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
  .item-video{
    .video-bg{
      margin: 0 auto;
      background: url('/imgs/product/gallery-1.png') no-repeat center;
      background-size: cover;
      width: 1000px;
      height: 500px;
    }
    .video-box{
      .overlay{
        @include position(fixed);
        background: $colorB;
        opacity: .3;
        z-index: 10;
      }
      .video{
        z-index: 10;
        position: fixed;
        top: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1000px;
        height: 536px;
        opacity: 0;
        transition: all .6s;
        &.slide{
          top: 50%;
          opacity: 1;
        }
        .iconfont{
          z-index: 11;
          position: absolute;
          top: 20px;
          right: 20px;
          color: $colorC;
          font-size: $fontE;
          transition: transform .2s;
          cursor: pointer;
          &:hover{
            transform: scale(1.5);
            color: $colorA;
            font-size: $fontC;
          }
        }
        video{
          width: 100%;
          height: 100%;
          object-fit: cover;
          outline: none;
        }
      }
    }
  }
</style>
