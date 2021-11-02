import Vue from 'vue'

export default {

  namespaced: true,

  state: () => ({
    user: null,
    company: null,
    // companies: null,
  }),

  mutations: {
    setUser(state, response) {
      state.user = response.user
      state.company = response.company

      this.commit('notification/setUnreadNotifications', response.user.unread_notifications)

      Vue.$broadcast.listenToNotifications(response.user.id)
    },

    // setCompany(state, user) {
    //   state.user = user
    // }
  },

  getters: {
    // isLoggedIn: state => {
    //   return (state.user !== null)
    // },

    // isCompanyLoggedIn: state => {
    //   return (state.company !== null)
    // }
  },

  actions: {

    // login({ commit, state }, { url, params }) {
    //   return new Promise((resolve, reject) => {
    //     Vue.$http.$post(url, params)
    //       .then((response) => {
    //         resolve(response)
    //       })
    //       .catch((error) => {
    //         reject(error)
    //       });
    //   })
    // },

    // companyLogin({ commit, state }, { url, companyId }) {
    //   return new Promise((resolve, reject) => {
    //     Vue.$http.$post(url, { companyId : companyId })
    //       .then((response) => {
    //         resolve(response)
    //       })
    //       .catch((error) => {
    //         reject(error)
    //       });
    //   })
    // },

    // loggout({ commit, state }) {
    //   commit('setUser', null)
    // },

    // getLoggedUser({ commit, state }, { url }) {
    //   return new Promise((resolve, reject) => {
    //     Vue.$http.$get(url)
    //       .then((response) => {
    //         commit('setUser', response)
    //         resolve(response)
    //       })
    //       .catch((error) => {
    //         reject(error)
    //       });
    //   })
    // }
  }
}