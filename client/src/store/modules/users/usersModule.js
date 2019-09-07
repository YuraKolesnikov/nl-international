import UserService from '@/services/UserService'

const state = {
  isLoggedIn: false,
  isAdmin: false,
  token: ''
}

const mutations = {
  /* newState = Boolean */
  setLoginState: (state, newState) => state.isLoggedIn = newState,
  setToken: (state, token) => state.token = token
}

const getters = {}

const actions = {
  logIn: async ({ commit }, payload) => {
    const response = await UserService.logIn(payload)

    if (response.status == 200) {
      commit('setLoginState', true)
      commit('setToken', response.data.token)
    }
    return response
  },
  logout: async ({ commit }) => {
    const response = await UserService.logout()
    if (response.status == 200) {
      commit('setLoginState', false)
      commit('setToken', '')
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}