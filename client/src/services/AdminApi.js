import axios from './axios'

export default {
  async getManagers() {
    try {
      const response = await axios.get('/admin/managers')
      return response
    } catch (e) {
      console.error(e)
    }
  },

  async getOrdersPrintable(dateFrom) {
    const path = dateFrom ? `/admin/orders-printable?dateFrom=${dateFrom}` : '/admin/orders-printable'
    try {
      const response = await axios.get(path)
      return response
    } catch (e) {
      console.error(e)
    }
  },

  async updateManager(payload) {
    try {
      const response = await axios.put(`/admin/managers`, payload)
      return response
    } catch (e) {
      console.error(e)
    }
  }
}