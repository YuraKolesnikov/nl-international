import AXIOS from './axios'

export default {
  async showOrders() {
    return await AXIOS().get('/orders')
  }
}