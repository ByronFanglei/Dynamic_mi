import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前登录用户名
    username: '',
    // 购物车商品数量
    cartCount: 0
  },
  mutations: {
    savaUsername (state, data) {
      // console.log(`mutations: ${data}`)
      state.username = data
    },
    savaCartcount (state, value) {
      state.cartCount = value
    }
  },
  actions: {
    getUsername (state, username) {
      // console.log(`action: ${username}`)
      state.commit('savaUsername', username)
    },
    getCartcount (state, value) {
      state.commit('savaCartcount', value)
    }
  },
  modules: {
  }
})
