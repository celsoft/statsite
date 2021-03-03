import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

import Argon from 'vue-argon-theme'
Vue.use(Argon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
