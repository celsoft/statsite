// eslint-disable-next-line no-unused-vars
import config from './config/app'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'
import Axios from 'axios'
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

import Argon from '@/plugins/argon-kit'
Vue.use(Argon);

import i18n from './i18n'

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
