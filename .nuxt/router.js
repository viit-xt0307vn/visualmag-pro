import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _382aa540 = () => interopDefault(import('..\\src\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _0dea74f0 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _d3f8b2e6 = () => interopDefault(import('..\\src\\pages\\author\\_slug\\index.vue' /* webpackChunkName: "pages/author/_slug/index" */))
const _2e47aac0 = () => interopDefault(import('..\\src\\pages\\category\\_slug\\index.vue' /* webpackChunkName: "pages/category/_slug/index" */))
const _5c870f11 = () => interopDefault(import('..\\src\\pages\\page\\_slug\\index.vue' /* webpackChunkName: "pages/page/_slug/index" */))
const _03e467d8 = () => interopDefault(import('..\\src\\pages\\tag\\_slug\\index.vue' /* webpackChunkName: "pages/tag/_slug/index" */))
const _30d3bc92 = () => interopDefault(import('..\\src\\pages\\_id\\index.vue' /* webpackChunkName: "pages/_id/index" */))
const _f1ce2f7c = () => interopDefault(import('..\\src\\pages\\_slug\\index.vue' /* webpackChunkName: "pages/_slug/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/search",
    component: _382aa540,
    name: "search"
  }, {
    path: "/",
    component: _0dea74f0,
    name: "index"
  }, {
    path: "/author/:slug",
    component: _d3f8b2e6,
    name: "author-slug"
  }, {
    path: "/category/:slug",
    component: _2e47aac0,
    name: "category-slug"
  }, {
    path: "/page/:slug",
    component: _5c870f11,
    name: "page-slug"
  }, {
    path: "/tag/:slug",
    component: _03e467d8,
    name: "tag-slug"
  }, {
    path: "/:id",
    component: _30d3bc92,
    name: "id"
  }, {
    path: "/:slug",
    component: _f1ce2f7c,
    name: "slug"
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
