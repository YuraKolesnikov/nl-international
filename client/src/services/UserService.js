import AXIOS from './axios'

export default {
  async showManagers() {
    try { 
      const response = await AXIOS().get('/admin/showAllManagers')
      return response.data
    }
    catch (error) { console.error(error) }
  },

  async logIn({ managerID, password }) {
    try {
      const response = await AXIOS().post('/users/login', { managerID, password })
      return response
    } catch (error) {
      console.error(error)
    }
  },

  async register(payload) {
    console.log('[AXIOS MESSAGE]: registering', { ...payload })
    /* try {
      const response = await AXIOS().post('/users/register', payload)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    } */
  },

  async logout() {
    try {
      const response = await AXIOS().get('/users/logout')
      return response
    } catch (error) {
      console.error(error)
    }
  },
}