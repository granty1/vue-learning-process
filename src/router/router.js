import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    // 别名配置
    alias: '/home_page',
    component: () => import('../views/layout.vue'),
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'table',
        component: () => import('../views/table.vue')
      },
      {
        path: 'tree',
        component: () => import('../views/folder-tree.vue')
      }
    ]
    // props: route => ({
    //   food: route.query.food
    // }),
    // // 属于 /home 的前置路由守卫
    // beforeEnter: (to, from, next) => {
    //   // if (from.name === 'about') alert('come from about page')
    //   // else alert('come from other page')
    //   next()
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/table.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    // meta存放了路由对象的源信息
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('../views/argu.vue'),
    props: true
  },
  {
    path: '/count-to',
    name: 'count-to',
    component: () => import('../views/count-to.vue')
  },
  {
    path: '/split-pane',
    name: 'split-pane',
    component: () => import('../views/split-pane')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('../views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('../views/child.vue')
      }
    ]
  },
  {
    path: '/menu-page',
    name: 'menu-page',
    component: () => import('../views/menu_page.vue')
  },
  {
    path: '/named_view',
    components: {
      default: () => import('../views/child.vue'),
      email: () => import('../views/email.vue'),
      tel: () => import('../views/tel.vue')
    }
  },
  // 重定向配置
  {
    path: '/main',
    redirect: to => '/'
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('../views/error_page.vue')
  }
]
