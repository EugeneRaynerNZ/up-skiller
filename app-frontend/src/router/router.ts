import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/store.ts'
// import Home from '../views/home.view.vue'
import Dashboard from '../views/dashboard.view.vue'
import NotFound from '../views/not-found.view.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: {
      requiresAuth: false,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login.view.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      requiresAuth: false,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/dashboard.view.vue'),
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: NotFound,
    meta: {
      requiresAuth: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  const user = store?.state?.auth?.user
  if (
    !to.meta.requiresAuth
  ) {
    return next()
  } else if (!user) {
    if (!['login', 'verify', 'reset'].includes(<string>to.name)) {
      return next({
        path: '/login',
        query: { nextUrl: to.fullPath },
      })
    } else {
      return next('/login')
    }
  }
})

export default router
