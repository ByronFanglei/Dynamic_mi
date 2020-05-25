<template>
  <div class="register">
    <div class="login">
      <img src="/imgs/logo-mi.png" alt="" @click="GotoIndex">
    </div>
    <div class="title">注册小米帐号</div>
    <div class="inp">
      <input type="text" name="" placeholder="请输入用户名" v-model="username">
      <input type="password" name="" placeholder="请输入密码" v-model="password">
      <input type="email" name="" placeholder="请输入邮箱" v-model="email">
      <div class="btn-huge" @click="register">立即注册</div>
    </div>
    <div class="privacy">已阅读并同意：小米 <b>用户协议</b>和 <b>隐私政策</b></div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    GotoIndex () {
      this.$router.push('/index')
    },
    register () {
      const { username, password, email } = this
      this.axios.post('/user/register', {
        username,
        password,
        email
      }).then(value => {
        this.$router.push('/login')
      }).catch(reason => {
        console.log(reason)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/style/scss/config.scss';
@import '@/assets/style/scss/button.scss';
  .register{
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
    width: 854px;
    .login{
      cursor: pointer;
      padding: 0 0 40px;
      img{
        display: block;
        margin: 0 auto;
        width: 49px;
      }
    }
    .title{
      text-align: center;
      font-size: 30px;
      color: $colorB;
      margin-bottom: 30px;
    }
    .inp{
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      input{
        margin: 0 auto;
        width: 316px;
        height: 22px;
        line-height: 22px;
        padding: 13px 16px 13px 14px;
        border:1px solid #d2d2d2;
        background-color:transparent;
        margin-bottom: 14px;
      }
      .btn-huge{
        margin: 0 auto;
        background: $colorA;
        color: $colorL;
      }
    }
    .privacy{
      margin-top: 40px;
      text-align: center;
    }
  }
</style>
