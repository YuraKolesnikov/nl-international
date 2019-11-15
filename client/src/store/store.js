import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

/* Modules */
import auth from './modules/auth/module'

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [ VuexPersistedState({
    storage: window.sessionStorage
  }) ]
})