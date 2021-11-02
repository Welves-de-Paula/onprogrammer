
import Http from './../api/Http.js'
import Vue from 'vue';

Vue.use({
  install(Vue) {

    let http = new Http({
      baseURL: process.env.VUE_APP_API_URL,
    })

    Vue.prototype.$http = http
    Vue.$http = http;
  }
})
