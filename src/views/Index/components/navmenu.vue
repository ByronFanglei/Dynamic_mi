<template>
  <div class="nav-menu">
    <ul class="nav-wrap">
      <li class="nav-item">
        <a href="javascript:;">手机 电话卡</a>
        <div class="children"></div>
      </li>
      <li class="nav-item">
        <a href="javascript:;">电视 盒子</a>
      </li>
      <li class="nav-item">
        <a href="javascript:;">笔记本 显示器 平板</a>
      </li>
      <li class="nav-item">
        <a href="javascript:;">家电 插线板</a>
      </li>
      <li class="nav-item">
        <a href="javascript:;">出行 穿戴</a>
      </li>
      <li class="nav-item">
        <a href="javascript:;">智能 路由器</a>
      </li>
      <li class="nav-item">
        <a href="javascript:;">电源 配件</a>
      </li>
      <li class="nav-item">
        <a href="javascript:;">健康 儿童</a>
      </li>
      <li class="nav-item">
        <a href="javascript:;">耳机 音响</a>
      </li>
      <li class="nav-item">
        <a href="javascript:;">生活 箱包</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav-menu'
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/config.scss';
  .nav-menu{
    position: absolute;
    width: 234px;
    height: 460px;
    z-index: 9;
    padding: 26px 0;
    background: rgba(105,101,101,.6);
    box-sizing: border-box;
    .nav-wrap{
      .nav-item{
        height: 42px;
        line-height: 42px;
        padding-left: 30px;
        position: relative;
        a{
          font-size: $fontJ;
          color: $colorL;
          &:after{
            content: '>';
            position: absolute;
            right: 30px;
            /* vertical-align: middle; */
          }
        }
        &:hover{
          background-color: $colorA;
        }
      }
    }
  }
</style>
