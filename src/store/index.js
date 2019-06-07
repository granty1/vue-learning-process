import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
import actions from './actions'
import user from './module/user'
import getters from './getters'
import saveInLocal from './plugin/saveInLocal'
Vue.use(Vuex)

export default new Vuex.Store({
  // 开启严格模式，此模式下，不允许直接修改state中的值，只能通过mutation方式修改。
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: []
})
