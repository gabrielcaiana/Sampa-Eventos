import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _166a11fb = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _5d7b3860 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _18a39250 = () => interopDefault(import('../pages/notFound.vue' /* webpackChunkName: "pages/notFound" */))
const _7b2e630c = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _079ac0b9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _166a11fb,
    name: "dashboard"
  }, {
    path: "/login",
    component: _5d7b3860,
    name: "login"
  }, {
    path: "/notFound",
    component: _18a39250,
    name: "notFound"
  }, {
    path: "/register",
    component: _7b2e630c,
    name: "register"
  }, {
    path: "/",
    component: _079ac0b9,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
