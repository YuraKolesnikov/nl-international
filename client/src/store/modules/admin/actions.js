import AdminApi from '@/services/AdminApi'

export default {
  GET_MANAGERS: async ({ commit }) => {
    const response = await AdminApi.getManagers()
    const { data: managers } = response
    commit('RECORD_MANAGERS', managers)
  },
  GET_ORDERS_PRINTABLE: async ({ commit }, dateFrom) => {
    const response = await AdminApi.getOrdersPrintable(dateFrom)
    commit('RECORD_PRINTABLE', response.data)
  },
  UPDATE_MANAGER: async ({ commit }, payload) => {
    const response = await AdminApi.updateManager(payload)
  }
}