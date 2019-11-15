import UserApi from '@/services/UserApi'

export default {
  REGISTER: async ({ commit, state }, payload) => {
    const response = await UserApi.register(payload)
    return response
  },
  LOGIN: async ({ commit, state }, payload) => {
    const response = await UserApi.login(payload)
    commit('RECORD_USER_ROLE', response.data.user.role)
    commit('RECORD_USER_ID', response.data.user.managerID)
    return response
  },
  LOGOUT: async ({ commit }) => {
    await UserApi.logout()
    commit('LOG_OUT')
  }
}