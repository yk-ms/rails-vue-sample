import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Index from '../components/index'
import About from '../components/about'

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Index
    },
    {
      path: '/about',
      component: About
    },
  ],
})
