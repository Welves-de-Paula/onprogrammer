import Vue from 'vue'
import store from '../store'

class Auth {

  constructor(options) {

    this.isBooted = false

    this.options = options

    this.user = null
    this.account = null
  }

  async boot() {
    this.loadToken()

    if (this.token) {
      await this.getLoginData()
    }

    this.isBooted = true
  }

  isUserLoggedIn() {
    return (this.user !== null)
  }

  isAccountLoggedIn() {
    return (this.account !== null)
  }

  userLogin(params) {
    return new Promise((resolve, reject) => {
      Vue.$http.$post(this.options.urls.userLogin, params)
        .then((response) => {
          this.processToken(response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        });
    })
  }

  accountLogin(account) {
    return new Promise((resolve, reject) => {
      Vue.$http.$post(this.options.urls.accountLogin, account)
        .then((response) => {
          this.processToken(response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        });
    })
  }

  loginWithGoogle() {
    window.location.href = this.options.loginWithGoogle.redirect;
  }

  logout() {
    this.deleteToken()
  }

  getLoginData() {
    console.log('loading login data...')
    return new Promise((resolve, reject) => {
      Vue.$http.$get(this.options.urls.loginData)
        .then((response) => {
          this.processLoginData(response)
          store.commit('auth/setUser', response);
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        });
    })
  }

  processToken(token) {
    this.token = token
    this.storeToken(token)
    this.setHttpHeaders(token)
  }

  processLoginData(response) {
    this.user = response.user
    this.account = response.company
    // this.isBooted = true // todo ??
  }

  loadToken() {
    this.token = JSON.parse(localStorage.getItem('token'));

    if (this.token) {
      this.setHttpHeaders(this.token)
    }
  }

  storeToken(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  setHttpHeaders(token) {
    Vue.$http.setAuthorizationToken('bearer ' + token.access_token)
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

}

export default Auth;