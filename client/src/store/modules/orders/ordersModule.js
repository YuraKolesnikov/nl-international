import OrderService from '@/services/OrderService'

const state = {
  orders: [],
  currentOrder: {}
}

const mutations = {}

const getters = {}

const actions = {
  createOrder: async (ctx, payload) => 
    await OrderService.addOrder(payload),
  editOrder: async (ctx, { id, payload }) => 
    /* TEMP */
    console.log(payload),
    /* await OrderService.editOrder(id, payload), */
  deleteOrder: async (ctx, { orderNumber, managerID }) => 
    await OrderService.deleteOrder({ orderNumber, managerID })
}

export default {
  state,
  mutations,
  getters,
  actions
}