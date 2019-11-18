import axios from './axios'

export default {
  async getManagers() {
    try {
      const result = await axios.get('/admin/managers')
      return result
    } catch (e) {
      console.error(e)
    }
  }
}