import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'
import store from '@/store'
import iView from 'iview'

Vue.use(Router)
Vue.use(iView)
const router = new Router({
  // mode : 'hash' 有#
  routes
})

// var HAS_LOGINED = true

// 注册全局前置守卫
router.beforeEach((to, from, next) => {
  // to 跳转的页面的路由对象
  // from 当前页面的路由对象
  // 判断路有对象是否需要自定义标题
  iView.LoadingBar.start()
  to.meta && setTitle(to.meta.title)
  // 判断用户登录状态
  if (to.name !== 'login') {
    if (store.state.user.IS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (store.state.user.IS_LOGINED) next({ name: 'home' })
    else next()
  }
})

// 注册后置钩子
router.afterEach((to, from) => {
  // loading style  = false
  iView.LoadingBar.finish()
})

/**
 * 1. 导航触发
 * 2. 在失活的组件（即将离开的组件） 调用离开守卫 beforeRouteLeave （xxx.vue）
 * 3. 调用全局前置守卫  beforeEach （index.js）
 * 4. 在重用的组件里调用 beforeRouteUpdate (xxx.vue)
 * 5. 路由独享的守卫 beforeEnter (router.js)中配置
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件） 里调用 beforeRouteEnter （xxx.vue）
 * 8. 调用全局解析守卫 beforeResolve （index.js）
 * 9. 导航被确认
 * 10. 调用全局后置钩子 afterEach （index.js）
 * 11. 触发DOM渲染更新
 * 12. 用创建好的实例调用在beforeFouteEnter守卫里传给next的回调函数      next(vm => {
                                                                        console.log(vm)
                                                                      })
 */
export default router
