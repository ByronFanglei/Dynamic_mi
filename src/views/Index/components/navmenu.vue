<template>
  <div class="nav-menu">
    <ul class="nav-wrap">
      <li class="nav-item">
        <div class="list">手机 电话卡</div>
        <div class="children">
          <ul v-for="(data, index) in menuList" :key="index">
            <li v-for="item in data" :key="item.id">
              <a class="datacontent" :href="`/product/${item ? item.id : ''}`">
                <img :src="item ? item.img : '/imgs/item-box-1.png'" alt="">
                <div class="title">{{item ? item.name : '小米9'}}</div>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <div class="list">电视 盒子</div>
      </li>
      <li class="nav-item">
        <div class="list">笔记本 显示器 平板</div>
      </li>
      <li class="nav-item">
        <div class="list">家电 插线板</div>
      </li>
      <li class="nav-item">
        <div class="list">出行 穿戴</div>
      </li>
      <li class="nav-item">
        <div class="list">智能 路由器</div>
      </li>
      <li class="nav-item">
        <div class="list">电源 配件</div>
      </li>
      <li class="nav-item">
        <div class="list">健康 儿童</div>
      </li>
      <li class="nav-item">
        <div class="list">耳机 音响</div>
      </li>
      <li class="nav-item">
        <div class="list">生活 箱包</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav-menu',
  data () {
    return {
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          }, {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          }, {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          }, {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动5G专区'
          }, {
            id: 34,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          }, {
            id: 35,
            img: '/imgs/item-box-4.jpg',
            name: '移动5G专区'
          }
        ],
        [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ]
    }
  }
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
        .list{
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
          .children{
            display: flex;
          }
        }
        .children{
          position: absolute;
          left: 234px;
          top: -26px;
          height: 460px;
          background: #fff;
          box-shadow: 0 8px 16px rgba(0,0,0,.18);
          display: none;
          flex-direction: row;
          ul{
            width: 248px;
            li{
              display: flex;
              flex-direction: row;
              padding: 18px 20px;
              box-sizing: border-box;
              a{
                line-height: 40px;
                img{
                  width: 40px;
                  margin-right: 12px;
                  vertical-align: middle;
                }
                .title{
                  display: inline;
                  font-size: $fontJ;
                  color: $colorB;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
