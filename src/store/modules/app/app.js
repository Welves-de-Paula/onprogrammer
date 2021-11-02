export default {

  namespaced: true,

  state: () => ({

    loading: false,

    alert: {
      message: null,
      id: null,
    },

    httpError: null,

    lastRoute: null,
  }),

  mutations: {
    alert(state, message) {
      state.alert.message = message
      state.alert.id = Math.random()
    },

    setHttpError(state, error) {
      state.httpError = error
    },

    resetHttpError(state) {
      state.httpError = null
    },

    setLastRoute(state, route) {
      state.lastRoute = route
    },


    setAppLoading(state, loading) {
      state.loading = loading
    },

  },

  actions: {

  }

}
