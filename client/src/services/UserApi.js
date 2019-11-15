import axios from './axios'

export default {
  async login(payload) {
    console.log(payload)
    try {
      const response = await axios.post('/users/login', payload)
      console.log(response)
      return response
    } catch (e) {
      console.error(e)
    }
  },
  async register(payload) {
    try {
      const response = await axios.post('/users/register', payload)
      console.log(response)
      return response
    } catch(e) {
      console.error(e)
    }
  },
  async logout() {

  }
}