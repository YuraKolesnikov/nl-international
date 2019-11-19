import axios from './axios'

export default {
  async login(payload) {
    try {
      const response = await axios.post('/users/login', payload)
      return response
    } catch (e) {
      console.error(e)
    }
  },
  async register(payload) {
    try {
      const response = await axios.post('/users/register', payload)
      return response
    } catch(e) {
      console.error(e)
    }
  },
  async logout() {
    try {
      const response = await axios.get('/users/logout')
      return response
    } catch (e) {
      console.error(e)
    }
  }
}