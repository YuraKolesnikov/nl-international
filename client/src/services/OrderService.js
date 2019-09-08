import AXIOS from './axios'

export default {
  async showOrders() {
    try { 
      const response = await AXIOS().get('/orders')
      console.log(response.data)
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
    console.log('OrderService: Sending request to backend', payload)
    try { 
      const response = await AXIOS().post('/orders',  payload)
      console.log(response)
      return response
    } 
    catch (error) { return error}
  },

  async editOrder(id, payload) {
    try {
      return await AXIOS().put(`/orders/edit/${id}`, payload)
    }
    catch (error) { return error }
  },

  async deleteOrder(id) {
    try { return await AXIOS().delete(`/orders/delete/${id}`) } 
    catch (error) { return error }
  }
}