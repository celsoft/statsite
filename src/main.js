import {config} from './config/app'
import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import Argon from '@/plugins/argon-kit'
import LoadScript from 'vue-plugin-load-script';
import {VueReCaptcha} from "vue-recaptcha-v3";

Vue.config.productionTip = false
Vue.prototype.appConfig = config

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

Vue.prototype.$http.defaults.baseURL = 'https://' + Vue.prototype.appConfig.apiHost + '/' + Vue.prototype.appConfig.apiVersion;
Vue.prototype.$http.defaults.headers.common['Accept-Language'] = i18n.locale;
document.querySelector('html').setAttribute('lang', i18n.locale)

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.use(Argon);

Vue.use(LoadScript);

Vue.use(VueReCaptcha, {
  siteKey: Vue.prototype.appConfig.recaptchaSiteKey,
  loaderOptions : {
    autoHideBadge : true
  }
});

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
