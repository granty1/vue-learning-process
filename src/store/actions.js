import { getAppName } from '@/api/app'

const actions = {
  // 回调函数实现
  updateAppName ({ commit }) {
    getAppName().then(res => {
      commit('SET_APP_NAME', res.info.appName)
    }).catch(err => {
      console.log(err)
    })
  }
  // es8 async 实现
  // async updateAppName ({ commit }) {
  //   try{
  //     const { info: { appName } } = await getAppName()
  //     commit('SET_APP_NAME', appName)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
}

export default actions
