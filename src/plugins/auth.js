
import Auth from './../api/Auth.js'
import Vue from 'vue';

Vue.use({
  install(Vue) {

    const options = {
      urls: {
        userLogin: 'auth/login',
        accountLogin: 'auth/company-login',
        loginData: 'auth/loggedUser'
      },

      loginWithGoogle: {
        redirect: 'http://app.pos.com.br/auth/google/login',
        callback_url: 'social_callback'
      },

      redirect: {
        home: '/',
        userLogin: '/login',
        accountLogin: '/selecionar-empresa'
      }
    }

    let auth = new Auth(options)

    Vue.prototype.$auth = auth
    Vue.$auth = auth;
  }
})

export default (_) => { }