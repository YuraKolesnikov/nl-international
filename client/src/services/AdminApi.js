import axios from './axios'

export default {
  async getManagers() {
    try {
      const response = await axios.get('/admin/managers')
      console.log(response)
      return response
    } catch (e) {
      console.error(e)
    }
  },

  async getOrdersPrintable(dateFrom) {
    const path = dateFrom ? `/admin/orders-printable?dateFrom=${dateFrom}` : '/admin/orders-printable'
    try {
      const response = await axios.get(path)
      console.log(response)
      return response
    } catch (e) {
      console.error(e)
    }
  },

  async updateManager(payload) {
    try {
      const response = await axios.put(`/admin/managers`, payload)
      console.log(response)
      return response
    } catch (e) {
      console.error(e)
    }
  }
}