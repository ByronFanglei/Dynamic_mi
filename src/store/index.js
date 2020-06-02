import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前登录用户名
    username: '',
    // 购物车商品数量
    cartCount: 0,
    // 支付订单名称
    payName: ''
  },
  mutations: {
    savaUsername (state, data) {
      // console.log(`mutations: ${data}`)
      state.username = data
    },
    savaCartcount (state, value) {
      state.cartCount = value
    },
    savePayName (state, value) {
      state.payName = value
    }
  },
  actions: {
    getUsername (state, username) {
      // console.log(`action: ${username}`)
      state.commit('savaUsername', username)
    },
    getCartcount (state, value) {
      state.commit('savaCartcount', value)
    },
    getPayName (state, payname) {
      state.commit('savePayName', payname)
    }
  },
  modules: {
  }
})
