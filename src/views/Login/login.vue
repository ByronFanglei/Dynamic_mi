<template>
  <div class="login">
    <div class="nav">
      <div>
        <a href="/index">
          <img src="/imgs/login-logo.png" alt="">
        </a>
      </div>
    </div>
    <div class="container">
      <div class="layout">
        <div class="layout-tabs">
          <span class="txt user">账号登录</span>
          <span class="line"></span>
          <span class="txt code">扫码登录</span>
        </div>
        <div class="layoyt-inp">
          <input type="text" name="" placeholder="邮箱/手机号码/小米ID" v-model="username">
          <input type="password" name="" v-model="password">
          <div class="btn-huge" @click="login">登录</div>
          <div class="other">
            <div class="info phone">手机短信登录/注册</div>
            <div class="info regist">
              <span class="registNow">立即注册</span>
              <span class="info-line"></span>
              <span class="password">忘记密码</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fotter">
      <div class="lang">
        <a href="javascript:;">简体</a><span>|</span>
        <a href="javascript:;">繁体</a><span>|</span>
        <a href="javascript:;">English</a><span>|</span>
        <a href="javascript:;">常见问题</a><span>|</span>
        <a href="javascript:;">隐私政策</a>
      </div>
      <p class="report">小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login () {
      // 解构this获取值
      const { username, password } = this
      this.axios.post('/user/login', {
        username,
        password
      }).then(value => {
        this.$cookie.set('userId', value.id, { expires: '1M' })
        this.$store.dispatch('getUsername', value.username)
        this.$router.push('/index')
      }).catch(reason => {
        console.log(`reason: ${reason}`)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/mixin.scss';
@import '@/assets/style/scss/config.scss';
@import '@/assets/style/scss/base.scss';
@import '@/assets/style/scss/button.scss';
  .login{
    .nav{
      @include container();
    }
    .container{
      display: flex;
      justify-content: flex-end;
      .layout{
        /* background: aquamarine; */
        width: 410px;
        .layout-tabs{
          height: 82px;
          padding: 27px 0 24px;
          box-sizing: border-box;
          text-align: center;
          font-size: $fontE;
          .txt{
            color: $colorC;
          }
          .user{
            color: $colorA;
          }
          .line{
            width: 1px;
            height: 24px;
            margin: 0 35px 0 42px;
            border: 1px solid #e0e0e0;
          }
        }
        .layoyt-inp{
          input{
            margin: 0 auto;
            display: block;
            width: 316px;
            height: 22px;
            line-height: 22px;
            padding: 13px 16px 13px 14px;
            border:1px solid #d2d2d2;
            background-color:transparent;
            margin-bottom: 14px;
          }
          .btn-huge{
            cursor: pointer;
            margin: 10px auto 14px;
            text-align: center;
            background: $colorA;
            color: $colorL;
          }
          .other{
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            padding: 0 31px 360px;
            box-sizing: border-box;
            .info{
              display: inline;
              font-size: $fontJ;
              color: $colorD;
              .info-line{
                border: 1px solid $colorD;
                margin: 0 5px;
              }
              .registNow{
                &:hover{
                  color: $colorA;
                }
              }
              .password{
                &:hover{
                  color: $colorA;
                }
              }
            }
            .phone{
              color: $colorA;
              &:hover{
                color: $colorA;
              }
            }
          }
        }
      }
    }
    .fotter{
      @include container();
      text-align: center;
      .lang{
        a{
          display: inline-block;
          padding: 0 10px;
          font-size: $fontJ;
          color: $colorB;
          &:hover{
            color: $colorI;
          }
        }
      }
      /* .content{

      } */
      .report{
        font-size: $fontJ;
        padding: 10px;
        color: #757575;
      }
    }
  }
</style>
