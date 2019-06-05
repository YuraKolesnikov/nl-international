<template>
  <div class="about">
    <h1>This is a home page</h1>
    <div class="container">
      <div class="row">
        <div v-for="order in orders" :key="order._id" class="order card col-md-3">
          <p><b>{{order}}</b></p>
          <router-link :to="`/orders/edit/${order._id}`">Edit order</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderService from '@/services/OrderService'
export default {
  data() {
    return {
      orders: []
    }
  },
  mounted() {
    this.showOrders()
  },
  methods: {
    async showOrders() {
      const response = await OrderService.showOrders()
      this.orders = response.data
    },
    editOrder(id) {
      this.$router.push({name: 'editOrder'})
    }
  }
}
</script>
<style lang="scss">
.order {
  border: 1px solid teal;
}
</style>
