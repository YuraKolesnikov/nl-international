import OrdersApi from '@/services/OrdersApi'

export default {
  GET_ORDERS: async ({ commit }, managerID) => {
    const response = await OrdersApi.getOrders(managerID)
    commit('RECORD_ORDERS', response.data)
  },
  ADD_ORDER: async({ commit }, payload) => {
    const response = await OrdersApi.addOrder(payload)
  },
  EDIT_ORDER: async({ commit }, payload) => {
    const response = await OrdersApi.editOrder(payload)
  },
  DELETE_ORDER: async ({ commit }, payload) => {
    console.log(payload)
    const response = await OrdersApi.deleteOrder(payload)
  }
}