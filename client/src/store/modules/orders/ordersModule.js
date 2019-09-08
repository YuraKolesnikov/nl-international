import OrderService from '@/services/OrderService'

const state = {
  orders: [],
  currentOrder: {}
}

const mutations = {
  RECORD_ORDERS: (state, orders) => state.orders = [...orders],
  DELETE_ORDER: (state, id) => state.orders.filter(order => order._id !== id)
}

const getters = {}

const actions = {
  getOrders: async ({ commit }) => { 
    const response = await OrderService.showOrders() 
    commit('RECORD_ORDERS', response.orders)
  },
  createOrder: async (ctx, payload) => 
    await OrderService.addOrder(payload),
  editOrder: async (ctx, { id, payload }) => 
    /* TEMP */
    console.log(payload),
    /* await OrderService.editOrder(id, payload), */
  deleteOrder: async ({ commit, state }, id/* { orderNumber, managerID } */) => {
    const response = await OrderService.deleteOrder(id/* { orderNumber, managerID } */)
    commit('DELETE_ORDER', id)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}