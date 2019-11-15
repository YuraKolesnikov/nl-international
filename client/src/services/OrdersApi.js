import axios from './axios'

export default {
  async getOrders(managerID) {
    try {
      const response = await axios.get(`/orders?managerID=${managerID}`)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
}