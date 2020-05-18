<template>
  <div class="info">
    <div class="sites">
        <a href="javascript:;">小米商城</a><span>|</span>
        <a href="javascript:;">MIUI</a><span>|</span>
        <a href="javascript:;">米家</a><span>|</span>
        <a href="javascript:;">米聊</a><span>|</span>
        <a href="javascript:;">游戏</a><span>|</span>
        <a href="javascript:;">多看</a><span>|</span>
        <a href="javascript:;">政企服务</a><span>|</span>
        <a href="javascript:;">小米天猫店</a><span>|</span>
        <a href="javascript:;">小米集团隐私政策</a><span>|</span>
        <a href="javascript:;">小米公司儿童信息保护规则</a><span>|</span>
        <a href="javascript:;">小米商城隐私政策</a><span>|</span>
        <a href="javascript:;">小米商城用户协议</a><span>|</span>
        <a href="javascript:;">问题反馈</a><span>|</span>
        <a href="javascript:;">Select Location</a>
    </div>
    <div class="mes">
      &copy;
      <a href="javascript:;">mi.com</a>
      京ICP证110507号
      <a href="javascript:;">京ICP备10046444号</a>
      <a href="javascript:;">京公网安备11010802020134号</a>
      <a href="javascript:;">京网文[2020]0276-042号</a>
      <br/>
      <a href="javascript:;">（京）网械平台备字（2018）第00005号</a>
      <a href="javascript:;">互联网药品信息服务资格证 (京)-非经营性-2014-0090</a>
      <a href="javascript:;">营业执照</a>
      <a href="javascript:;">医疗器械质量公告</a>
      <br/>
      <a href="javascript:;">增值电信业务许可证</a>
      网络食品经营备案（京）【2018】WLSPJYBAHF-12
      <a href="javascript:;">食品经营许可证</a>
      <br/>
      违法和不良信息举报电话：185-0130-1238
      <a href="javascript:;">知识产权侵权投诉</a>
      本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
    </div>
    <div class="mark">探索黑科技，小米为发烧而生</div>
  </div>
</template>

<script>
export default {
  name: 'site-info'
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
.info{
  @include container();
  /* background: chocolate; */
  display: flex;
  flex-direction: column;
  .sites{
    margin: 14px 0;
    a{
      font-size: $fontJ;
      color: #757575;
      &:hover{
        color: $colorA;
      }
    }
    span{
      color: $colorB;
      margin: 0 5px;
    }
  }
  .mes{
    margin: 14px 0;
    font-size: $fontJ;
    a{
      color: $colorB;
      &:hover{
        color: $colorA;
      }
    }
  }
  .mark{
    display: block;
    text-align: center;
  }
}
</style>
