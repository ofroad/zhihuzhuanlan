import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueResource)
Vue.use(VueRouter)

// Vue.http.options.emulateJSON = true;

import routes from './router.js'
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
