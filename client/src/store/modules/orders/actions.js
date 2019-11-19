import OrdersApi from '@/services/OrdersApi'

export default {
  GET_ORDERS: async ({ commit }, managerID) => {
    const response = await OrdersApi.getOrders(managerID)
    commit('RECORD_ORDERS', response.data)
  },
  ADD_ORDER: async({ commit, dispatch }, payload) => {
    const response = await OrdersApi.addOrder(payload)
    if (response.status === 201) {
      dispatch(
        'messages/SHOW_ALERT',
        { message: 'orderCreatedSuccessfully', status: 'success' },
        { root: true }
      )
    }
  },
  EDIT_ORDER: async({ commit }, payload) => {
    const response = await OrdersApi.editOrder(payload)
  },
  DELETE_ORDER: async ({ commit }, payload) => {
    const response = await OrdersApi.deleteOrder(payload)
  }
}