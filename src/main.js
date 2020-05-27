import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import moment from 'moment'
import '@/assets/style/iconfont.css'

// 设置接口代理的连接首部，当访问/api后走接口代理
axios.defaults.baseURL = '/api'
// 设置超时时间
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use((response) => {
  const res = response.data
  if (res.status === 0) {
    // 接口返回正常
    return res.data
  } else if (res.status === 10) {
    // 用户未登录
    window.location.href = '/login'
  } else {
    // 返回错误信息
    alert(res.msg)
    return Promise.reject(res)
  }
})
// 设置时间地址
moment.locale('zh-cn')
// 设置vuecookie
Vue.use(VueCookie)
// 将axios挂载到this中
Vue.use(VueAxios, axios)
// 设置懒加载
Vue.use(VueLazyLoad, {
  loading: 'imgs/loading-svg/loading-bubbles.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
