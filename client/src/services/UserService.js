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
    console.log('Payload received')
    try {
      const response = await AXIOS().post('/users/login', payload)
      return response.data
    } catch (error) {
      return error
    }
  },

  async register(payload) {
    return await AXIOS().post('/users/register', {payload})
  },

  async logout() {
    return await AXIOS().get('/users/logout')
  },

  async postTest(payload, token) {
    return await AXIOS().post(
			'/users/postTest',
			payload,
			{
				headers: {
					Authorization: `bearer ${token}`
				}
			}
		)
  }
}