import vue from 'vue'
const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
  },
  ADD_VERSION (state) {
    vue.set(state, 'appVersion', 'v2.0.0')
  },
  updateStateValue (state, value) {
    state.stateValue = value
  },
  updateValueByGetSet (state, value) {
    state.valueByGetSet = value
  }
}

export default mutations
