<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 offset-md-3">
        <OrderForm 
          :mode="'create'"
          :submit="addOrder"
          />
      </div>
    </div>
  </div>
</template>
<script>
import OrderForm from '@/components/OrderForm'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    OrderForm
  },
  computed: {
    ...mapState('auth', ['managerID'])
  },
  methods: {
    ...mapActions('orders', ['ADD_ORDER']),
    async addOrder(payload) {
      payload.managerID = this.managerID
      payload.price = parseInt(payload.price)
      await this.ADD_ORDER(payload)
      this.$router.replace({ path: '/my-orders' })
    }
  }
}
</script>