import AXIOS from './axios'

export default {
  async showManagers() {
    try { 
      const response = await AXIOS().get('/admin/showAllManagers')
      console.log(response)
      return response
    }
    catch (error) { console.error(error) }
  },

  async logIn(payload) {
    try {
      const response = await AXIOS().post('/users/login', payload)
      console.log(reponse)
      return response
    } catch (error) {
      console.error(error)
    }
  },

  async register(payload) {
    try {
      const response = await AXIOS().post('/users/register', payload)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    }
  },

  async logout() {
    try {
      const response = await AXIOS().get('/users/logout')
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    }
  },
}