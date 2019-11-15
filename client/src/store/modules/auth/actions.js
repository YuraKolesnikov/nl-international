import UserApi from '@/services/UserApi'

export default {
  REGISTER: async ({ commit, state }, payload) => {
    const response = await UserApi.register(payload)
    console.log(response)
    return response
  },
  LOGIN: async ({ commit, state }, payload) => {
    const response = await UserApi.login(payload)
    console.log(response)
    return response
  }
}