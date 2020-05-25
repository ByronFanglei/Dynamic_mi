import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    savaUsername (state, data) {
      // console.log(`mutations: ${data}`)
      state.username = data
    }
  },
  actions: {
    getUsername (state, username) {
      // console.log(`action: ${username}`)
      state.commit('savaUsername', username)
    }
  },
  modules: {
  }
})
