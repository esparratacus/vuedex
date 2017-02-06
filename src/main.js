// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueMaterial)
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.http.options.root = 'http://pokeapi.co/api/v2'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
