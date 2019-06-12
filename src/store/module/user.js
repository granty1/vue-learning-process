import { loginApi, authorizationApi} from '@/api/user'
import { setToken, getToken } from '@/lib/util'
import { resolve } from 'url';
const state = {
  //
  currentUserName: '',
  IS_LOGINED: true
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
  },
  login ({commit}, user) {
    return new Promise((reslove, reject) => {
      loginApi(user).then(res => {
        if(res.code === '200' && res.token){
          setToken(res.token)
          reslove()
        }else{
          reject(res.msg)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  authorizationAction ({ commit }, token) {
    console.log('load autoorization action')
    return new Promise((resolve, reject) => {
      authorizationApi().then(res => {
        if(res.code === '401') {
          reject(res.msg)
        }else{
          setToken(res.token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logoutAction() {
    setToken('')
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
