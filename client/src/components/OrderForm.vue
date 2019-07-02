<template>
  <div class="card text-left">
    <div class="card-header">
      <button class="btn btn-primary" @click="mode === 'create' ? mode = 'edit' : mode = 'create'">Change mode</button>
      <!-- TODO: Pass the prop 'mode' -->
      <h3>{{mode === 'create' ? 'Create' : 'Edit'}} Order</h3>
    </div>
    <div class="card-body">
      <!-- TODO: Port to axios -->
      <form @submit.prevent="addOrder">
        <fieldset class="form-group">
          <label for="orderNumber">{{ $t('order.number') }}</label>
          <input 
            id="orderNumber" 
            type="text" 
            name="orderNumber" 
            class="form-control"
            v-model="fields.orderNumber">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderDate">{{ $t('order.date') }}</label>
          <input 
            id="orderDate" 
            type="date" 
            name="orderDate" 
            class="form-control"
            v-model="fields.orderDate">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderPrice">{{ $t('order.price') }}</label>
          <input 
            id="orderPrice" 
            type="text" 
            name="orderPrice" 
            class="form-control"
            v-model="fields.orderPrice">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderCity">{{ $t('order.city') }}</label>
          <select 
            name="orderCity" 
            id="orderCity" 
            class="form-control" 
            v-model="fields.orderCity">
            <option value disabled selected>{{ $t('order.city') }}</option>
            <option value="Псков">Псков</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
          </select>
        </fieldset>
        <button type="submit" class="btn btn-primary">{{ $t('submit') }}</button>
      </form>
    </div>
  </div>
</template>
<script>
import OrderService from '@/services/OrderService'

export default {
  data() {
    return {
      mode: 'edit',
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