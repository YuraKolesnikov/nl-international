import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersistedState from 'vuex-persistedstate'

import orders from './orders'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    orders,
    users
  },
  plugins: [vuexPersistedState()]
})
