import AdminApi from '@/services/AdminApi'

export default {
  GET_MANAGERS: async ({ commit }) => {
    const response = await AdminApi.getManagers()
    const { data: managers } = response
    commit('RECORD_MANAGERS', managers)
  }
}