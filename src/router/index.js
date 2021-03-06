import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import auth from './modules/auth.js'
Vue.use(VueRouter)

const routes = [
  ...auth,

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'AppLayout' },

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },

  {
    path: '/teste',
    name: 'teste',
    meta: { layout: 'AppLayout' },
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/teste.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router




