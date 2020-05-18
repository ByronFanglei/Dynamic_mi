<template>
  <div class="site">
    <div class="container">
      <ul>
        <li>
          <span class="iconfont">&#xe659;</span>
          预约维修服务
        </li>
        <li>
          <span class="iconfont">&#xe600;</span>
          7天无理由退货
        </li>
        <li>
          <span class="iconfont">&#xe606;</span>
          15天免费换货
        </li>
        <li>
          <span class="iconfont">&#xe619;</span>
          满99元包邮
        </li>
        <li>
          <span class="iconfont">&#xe61b;</span>
          520余家售后网点
        </li>
      </ul>
    </div>
    <div class="clearfix">
      <div class="links">
        <ul>
          <li>帮助中心</li>
          <li>账户管理</li>
          <li>账户管理</li>
          <li>订单操作</li>
        </ul>
        <ul>
          <li>服务支持</li>
          <li>售后政策</li>
          <li>自助服务</li>
          <li>相关下载</li>
        </ul>
        <ul>
          <li>线下门店</li>
          <li>小米之家</li>
          <li>服务网店</li>
          <li>授权体验店</li>
        </ul>
        <ul>
          <li>关于小米</li>
          <li>了解小米</li>
          <li>加入小米</li>
          <li>投资者关系</li>
        </ul>
        <ul>
          <li>关注我们</li>
          <li>新浪微博</li>
          <li>官方微信</li>
          <li>联系我们</li>
        </ul>
        <ul>
          <li>特色服务</li>
          <li>F 码渠道</li>
          <li>礼物码</li>
          <li>防伪查询</li>
        </ul>
      </div>
      <div class="contact">
        <div class="phone">400-100-5678</div>
        <div class="time">8:00-18:00（仅收市话费）</div>
        <div class="btn">
          <span class="iconfont">&#xe603;</span>
          人工客服
        </div>
        <div class="follow">
          关注小米:
          <span class="iconfont">&#xe62f;</span>
          <span class="iconfont">&#xe632;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'site-fotter'
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/config.scss';
@import '@/assets/style/scss/mixin.scss';
  .site{
    width: 100%;
    .container{
      ul{
        overflow: hidden;
        text-align: center;
        font-size: $fontI;
        color: #616161;
        border-bottom: 1px solid #e0e0e0;
        li{
          width: 19.9%;
          float: left;
          margin: 27px 0;
          border-right: 1px solid #e0e0e0;
          cursor: pointer;
          transition: all .2s;
          span{
            display: inline-block;
            font-size: 24px;
          }
          &:hover{
            color: $colorA;
            transition: all .2s;
          }
        }
        li:last-of-type{
          border: none;
        }
      }
    }
    .clearfix{
      @include container();
      @include flex();
      margin-top: 40px;
      margin-bottom: 40px;
      .links{
        border-right: 1px solid #e0e0e0;
        ul{
          width: 163px;
          display: inline-block;
          li:first-of-type{
            margin: -1px 0 26px;
            font-size: $fontJ;
            line-height: 1.25;
            color: #424242;
          }
          li{
            color: $colorB;
            font-size: $fontK;
            margin-top: 10px;
          }
        }
      }
      .contact{
        @include flex();
        margin: 0 auto;
        flex-direction: column;
        .phone{
          font-size: $fontF;
          line-height: 1;
          color: $colorA;
          margin-bottom: 5px;
        }
        .time{
          font-size: $fontK;
          margin-bottom: 5px;
        }
        .btn{
          cursor: pointer;
          width: 120px;
          height: 30px;
          line-height: 30px;
          border: 1px solid $colorA;
          text-align: center;
          color: $colorA;
          transition: all .5s;
          &:hover{
            color: $colorL;
            background: $colorA;
            transition: all .5s;
          }
        }
        .follow{
          margin-top: 10px;
          font-size: $fontK;
          span{
            cursor: pointer;
            display: inline-block;
            margin-left: 6px;
            font-size: $fontG;
            &:hover{
              color: $colorA;
            }
          }
        }
      }
    }
  }
</style>
