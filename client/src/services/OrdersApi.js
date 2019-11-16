import axios from './axios'

export default {
  async getOrders(managerID) {
    try {
      const response = await axios.get(`/orders?managerID=${managerID}`)
      return response
    } catch (error) {
      console.error(error)
    }
  },
  async addOrder(payload) {
    try {
      const response = await axios.post('/orders', payload)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    }
  },
  async editOrder(payload) {
    try {
      const response = await axios.put(`/orders/${payload.number}`, payload)
      console.log(response)
    } catch (error) {
      
    }
  },
  async deleteOrder({ number, managerID }) {
    try {
      const response = await axios.delete(`/orders/?number=${number}&managerID=${managerID}`)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
}