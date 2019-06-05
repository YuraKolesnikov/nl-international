<template>
  <div>
    <h1>Editing order {{id}}</h1>
    <h2>Order: </h2>
    <span>{{getOrderById(id)}}</span>
  </div>
</template>
<script>
import OrderService from '@/services/OrderService'
export default {
  data() {
    return {
      id: this.$route.params.id,
      orders: []
    }
  },
  mounted() {
    this.getOrders()
  },
  methods: {
    getOrderById(id) {
      return this.orders.filter(item => item._id === id)
    },
    async getOrders() {
      const response = await OrderService.showOrders()
      this.orders = response.data
    }
  }
}
</script>