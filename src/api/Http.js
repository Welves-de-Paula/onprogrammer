
import axios from 'axios'
import store from '../store'

class Http {

  constructor(options) {
    this.httpClient = axios.create(options)
  }

  setAuthorizationToken(token) {
    this.httpClient.defaults.headers.common['Authorization'] = token;
  }

  $get(url, params) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url, { params })
        .then((response) => {
          resolve(response.data)
        }).catch(error => {
          this.processError(error)
          reject(error)
        });
    })
  }

  $post(url, params) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, params)
        .then((response) => {
          resolve(response.data)
        }).catch(error => {
          this.processError(error)
          reject(error)
        });
    })
  }

  $put(url, params) {
    return new Promise((resolve, reject) => {
      this.httpClient.put(url, params)
        .then((response) => {
          resolve(response.data)
        }).catch(error => {
          this.processError(error)
          reject(error)
        });
    })
  }

  $delete(url, params) {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(url, params)
        .then((response) => {
          resolve(response.data)
        }).catch(error => {
          this.processError(error)
          reject(error)
        });
    })
  }

  index(url, params = null) {
    return this.$get(url, params)
  }

  show(url, id, params = null) {
    return this.$get(url + '/' + id, params)
  }

  store(url, params) {
    return this.$post(url, params)
  }

  update(url, id, params) {
    return this.$put(url + '/' + id, params)
  }

  destroy(url, id) {
    return this.$delete(`${url}/${id}`)
  }

  processError(error) {
    // console.log(error)
    store.commit('app/setHttpError', error);
  }
}

export default Http;