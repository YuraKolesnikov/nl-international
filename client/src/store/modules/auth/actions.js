import UserApi from '@/services/UserApi'

export default {
  SIGN_IN: async ({ commit, state }, payload) => {
    console.log(payload)
    const response = await UserApi.register(payload)
    console.log('actions.js', response)
  }
}