import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/styles.sass'
import globalComponents from './plugins/globalComponents'
import http from './plugins/http'
import auth from './plugins/auth'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  globalComponents,
  http,
  auth,
  render: function (h) { return h(App) }
}).$mount('#app')
