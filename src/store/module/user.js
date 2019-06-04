const state = {
  //
  currentUserName: '',
  IS_LOGINED: false
}
const mutations = {
  USER_LOGIN (state, params) {
    state.IS_LOGINED = true
    state.currentUserName = params
  }
}

const actions = {
  updateCurrentUserName ({ commit, state, rootState, dispatch }) {
    // commit 调用 mutations
    // dispatch 调用其他actions
    // state 当前state
    // rootState 根state
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
