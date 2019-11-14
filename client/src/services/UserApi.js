import axios from './axios'

export default {
  async login() {
    
  },
  async register(payload) {
    try {
      const response = await axios.post('/users/register', payload)
      console.log(response)
    } catch(e) {
      console.error(e)
    }
  },
  async logout() {

  }
}