import AXIOS from './axios'

export default {
  async showOrders() {
    try { await AXIOS().get('/orders') } 
    catch (error) { return error }
  },
  
  async createOrder(payload) {
    try { await AXIOS().post('/orders',  payload) } 
    catch (error) { return error}
  },

  async editOrder(id, payload) {
    try { await AXIOS.post(`/orders/edit/${id}`, payload) }
    catch (error) { return error }
  },

  async deleteOrder(id) {
    try { await AXIOS.delete(`/orders/delete/${id}`) } 
    catch (error) { return error }
  }
}