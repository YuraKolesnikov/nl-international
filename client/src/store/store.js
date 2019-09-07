import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import ordersModule from './modules/orders/ordersModule'
import usersModule from './modules/users/usersModule'

export default new Vuex.Store({
  modules: {
    orders: ordersModule,
    users: usersModule
  }
})
