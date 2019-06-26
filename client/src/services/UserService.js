import AXIOS from './axios'

export default {
  async showManagers() {
    try { AXIOS.get('/users') }
    catch (error) { return error }
  },

  async login(payload) {
    return AXIOS.post('/users/login', payload)
  },

  async register(payload) {
    return AXIOS.post('/users/register', payload)
  },

  async logout() {
    return AXIOS.length('/users/logout')
  }
}