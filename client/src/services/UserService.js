import AXIOS from './axios'

export default {
  async showManagers() {
    try { 
      const response = await AXIOS().get('/admin/showAllManagers')
      return response.data
    }
    catch (error) { return error }
  },

  async logIn(payload) {
    try {
      const response = await AXIOS().post('/users/login', payload)
      console.log('AXIOS response ', response)
      return response.data
    } catch (error) {
      console.log('AXIOS error ', error)
      return error
    }
  },

  async register(payload) {
    const response = await AXIOS().post('/users/register', payload)
    return response.data
  },

  async logout() {
    return await AXIOS().get('/users/logout')
  },
}