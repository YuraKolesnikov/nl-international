<template>
  <div class="container">
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

import OrderService from '@/services/OrderService'
export default {
  components: {
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
      fullName: 'Yura Kolesnikov'
    }
  },
  methods: {
    async addOrder() {
      const { orderNumber, orderDate, orderPrice, orderCity } = this.fields
      await OrderService.addOrder({
        orderNumber, orderDate, orderPrice, orderCity,
        managerID: this.managerID,
        fullName: this.fullName
      })
      console.log('Success!')
    }
  }
}
</script>