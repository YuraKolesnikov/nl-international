import OrdersApi from '@/services/OrdersApi'

export default {
  GET_ORDERS: async ({ commit }, managerID) => {
    const response = await OrdersApi.getOrders(managerID)
  },
  ADD_ORDER: async({ commit }, payload) => {
    const response = await OrdersApi.addOrder(payload)
  }
}