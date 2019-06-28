import Vue from 'vue'
import Vuex from 'vuex'

import orders from './orders'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    orders,
    users
  }
})
