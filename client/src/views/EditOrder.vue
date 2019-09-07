<template>
  <div>
    <h1>Editing order {{ id }}</h1>
    <h2>Order: </h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 offset-md-3">
          <OrderForm 
            :mode="'edit'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderForm from '@/components/OrderForm'
export default {
  components: {
    OrderForm
  },
  data() {
    return {
      id: this.$route.params.id,
      order: {
        orderNumber: '20582968',
        orderCity: 'Псков',
        orderDate: '2019-08-15',
        orderPrice: '1680'
      }
    }
  }
}
</script>