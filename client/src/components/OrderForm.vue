<template>
  <div class="card text-left">
    <div class="card-header">
      <h3> {{$t(mode === 'create' ? 'createOrder' : 'editOrder')}}</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="orderMethod">
        <fieldset class="form-group">
          <label for="orderNumber">{{ $t('order.number') }}</label>
          <input 
            id="orderNumber" 
            type="text" 
            name="orderNumber" 
            class="form-control"
            v-model="fields.orderNumber"
            required>
        </fieldset>
        <fieldset class="form-group">
          <label for="orderDate">{{ $t('order.date') }}</label>
          <input 
            id="orderDate" 
            type="date" 
            name="orderDate" 
            class="form-control"
            v-model="fields.orderDate"
            required>
        </fieldset>
        <fieldset class="form-group">
          <label for="orderPrice">{{ $t('order.price') }}</label>
          <input 
            id="orderPrice" 
            type="text" 
            name="orderPrice" 
            class="form-control"
            v-model="fields.orderPrice"
            required>
        </fieldset>
        <fieldset class="form-group">
          <label for="orderCity">{{ $t('order.city') }}</label>
          <select 
            name="orderCity" 
            id="orderCity" 
            class="form-control"
            v-model="fields.orderCity"
            required>
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
export default {
  props: ['mode', 'order'],
  data() {
    return {
      fields: {
        orderNumber: '',
        orderDate: '',
        orderPrice: '',
        orderCity: ''
      }
    }
  },
  created() {
    if (this.order == undefined) return
    else if (this.order !== undefined) {
      [...Object.keys(this.fields)].forEach(key => {
        this.fields[key] = this.order[key]
      })
    }
  },
  methods: {
    orderMethod() {
      this.mode === 'create' ? this.createOrder() : this.editOrder()
    },
    createOrder() {
      console.log('Creating order...', this.fields)
    },
    editOrder() {
      console.log('Editing order...', this.fields)
    }
  }
}
</script>