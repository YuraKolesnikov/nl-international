import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* Modules */
import auth from './modules/auth/module'

export default new Vuex.Store({
  modules: {
    auth
  }
})