<template>
  <div class="container">
    <Alert v-for="(alert, index) in alertMessages" :key="index" :data="alert" />
    <div class="row">
      <div class="col-md-6 col-sm-12 offset-md-3">
        {{fields}}
        <OrderForm :mode="'create'" :orderCallback="addOrder" :fields="fields"/>
      </div>
    </div>
  </div>
</template>
<script>
import OrderForm from '@/components/OrderForm'
import Alert from '@/components/Alert'
import OrderService from '@/services/OrderService'
export default {
  components: {
    Alert,
    OrderForm
  },
  data() {
    return {
      mode: 'create',
      fields: {
        orderNumber: '',
        orderDate: '',
        orderPrice: '',
        orderCity: ''
      },
      managerID: 'a',
      fullName: 'Yura Kolesnikov',
      alertMessages: []
    }
  },
  methods: {
    async addOrder() {
      /* const { orderNumber, orderDate, orderPrice, orderCity } = this.fields
      const response = await OrderService.addOrder({
        orderNumber, orderDate, orderPrice, orderCity,
        managerID: this.managerID,
        fullName: this.fullName
      })
      this.alertMessages.push({
        type: 'success',
        message: response.message
      }) */
    }
  }
}
</script>