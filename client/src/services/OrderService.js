import AXIOS from './axios'

export default {
  async showOrders() {
    try { 
      const response = await AXIOS().get('/orders')
      return response.data
    } 
    catch (error) { return error }
  },

  async showOrdersPrintable() {
    try {
      const response = await AXIOS().get('/admin/showAllPrintable')
      return response.data
    }
    catch (error) { return error }
  },
  
  async addOrder(payload) {
    try { await AXIOS().post('/orders',  payload) } 
    catch (error) { return error}
  },

  async editOrder(id, payload) {
    try { 
      console.log('AXIOS: ')
      console.log(`ID: ${id}`)
      console.log('Payload: ', payload)
      await AXIOS().put(`/orders/edit/${id}`, payload)
    }
    catch (error) { return error }
  },

  async deleteOrder(id) {
    try { await AXIOS().delete(`/orders/delete/${id}`) } 
    catch (error) { return error }
  }
}