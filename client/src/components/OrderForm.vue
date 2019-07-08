<template>
  <div class="card text-left">
    <div class="card-header">
      <h3> {{$t(mode === 'create' ? 'createOrder' : 'editOrder')}}</h3>
    </div>
    <div class="card-body">
      <!-- TODO: Port to axios -->
      <form @submit.prevent="orderCallback">
        <fieldset class="form-group">
          <label for="orderNumber">{{ $t('order.number') }}</label>
          <input 
            id="orderNumber" 
            type="text" 
            name="orderNumber" 
            class="form-control"
            required
            v-model="fields.orderNumber">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderDate">{{ $t('order.date') }}</label>
          <input 
            id="orderDate" 
            type="date" 
            name="orderDate" 
            class="form-control"
            required
            v-model="fields.orderDate">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderPrice">{{ $t('order.price') }}</label>
          <input 
            id="orderPrice" 
            type="text" 
            name="orderPrice" 
            class="form-control"
            required
            v-model="fields.orderPrice">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderCity">{{ $t('order.city') }}</label>
          <select 
            name="orderCity" 
            id="orderCity" 
            class="form-control"
            required 
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
  props: ['mode', 'orderCallback', 'order', 'fields'],
  data() {
    return {
      managerID: 'a',
      fullName: 'Yura Kolesnikov'
    }
  }
}
</script>