<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 offset-md-3">
        <OrderForm :mode="'create'"/>
      </div>
    </div>
  </div>
</template>
<script>
import OrderForm from '@/components/OrderForm'

export default {
  components: {
    OrderForm
  }
}
</script>