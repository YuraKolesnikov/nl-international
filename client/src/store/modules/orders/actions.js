import OrdersApi from '@/services/OrdersApi'
import alertMessages from '@/utils/alertMessages'

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
        { message: alertMessages.addOrderSuccess, status: 'success' },
        { root: true }
      )
    } else if (response.status === 403) {
      dispatch(
        'messages/SHOW_ALERT',
        { message: alertMessages.notAuthorized, status: 'error' },
        { root: true }
      )
    } else {
      dispatch(
        'messages/SHOW_ALERT',
        { message: alertMessages.addOrderFailure, status: 'error' },
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