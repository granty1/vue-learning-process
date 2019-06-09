import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
// if (process.env.NODE_ENV !== 'production') require('./mock')
import './mock/index'
Vue.config.productionTip = false
// 注入 bus
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default {
  router,
  store
}
