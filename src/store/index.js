import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/store/modules/app/app'
import auth from '@/store/modules/app/auth'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    app,
    auth,
  }
})
