import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

import Argon from '@/plugins/argon-kit'
Vue.use(Argon);

// eslint-disable-next-line no-unused-vars
import config from './config.js'

import i18n from './i18n'

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
