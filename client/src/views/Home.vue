<template>
  <div class="about">
    <h1>This is a home page</h1>
    <Greeting />
    <div class="container">
      <div class="row">
        <div class="col-sm-12" v-for="item in alertData" :key="item.type">
          <Alert :data="item"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderService from '@/services/OrderService'
import Greeting from '@/components/Greeting.vue'
import Alert from '@/components/Alert.vue'
export default {
  components: {
    Alert,
    Greeting
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
