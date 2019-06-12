import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
// if (process.env.NODE_ENV !== 'production') require('./mock')
// import './mock/index'
Vue.config.productionTip = false
// 注入 bus
Vue.prototype.$bus = Bus
Vue.use(iView)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach( (to, from, next) => {
  iView.LoadingBar.finish()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default {
  router,
  store
}
