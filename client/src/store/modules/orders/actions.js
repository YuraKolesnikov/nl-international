import OrdersApi from '@/services/OrdersApi'

export default {
  GET_ORDERS: async ({ commit }, managerID) => {
    const response = await OrdersApi.getOrders(managerID)
  }
}