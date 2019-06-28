import AXIOS from './axios'

export default {
  async showManagers() {
    try { 
      const response = await AXIOS().get('/admin/showAllManagers')
      return response.data
    }
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