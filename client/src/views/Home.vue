<template>
  <div class="about">
    <h1>This is a home page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-12" v-for="item in alertData" :key="item.type">
          <Alert :data="item"/>
        </div>
      </div>
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
import Alert from '@/components/Alert.vue'
export default {
  components: {
    Alert
  },
  data() {
    return {
      orders: [],
      alertData: [
        { type: 'success', message: 'User registered!' },
        { type: 'danger', message: 'Login is taken!' }
      ]
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
