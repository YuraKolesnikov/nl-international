import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

/* Modules */
import admin from './modules/admin/module'
import auth from './modules/auth/module'
import messages from './modules/messages/module'
import orders from './modules/orders/module'

export default new Vuex.Store({
  modules: {
    admin,
    auth,
    messages,
    orders
  },
  plugins: [ VuexPersistedState({
    storage: window.sessionStorage
  }) ]
})