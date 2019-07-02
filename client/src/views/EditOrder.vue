<template>
  <div>
    <h1>Editing order {{id}}</h1>
    <h2>Order: </h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 offset-md-3">
          {{order}}
          <OrderForm 
            :mode="'edit'" 
            :orderCallback="editOrder" 
            :fields="order" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderForm from '@/components/OrderForm'
import OrderService from '@/services/OrderService'
import dateEncoder from '@/services/dateEncoder'
export default {
  components: {
    OrderForm
  },
  data() {
    return {
      id: this.$route.params.id,
      orders: [],
      order: {}
    }
  },
  async created() {
    this.orders = await OrderService.showOrders()
    this.order = await this.orders.find(item => item._id === this.id)
    this.order.orderDate = dateEncoder.encode(this.order.orderDate)
  },
  methods: {
    async editOrder() {
      await OrderService.editOrder(this.id, this.order)
    }
  }
}
</script>