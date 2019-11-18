<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 offset-md-3">
          <OrderForm 
            :mode="'edit'" 
            :order="order" 
            :submit="editOrder"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderForm from '@/components/OrderForm'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    OrderForm
  },
  data() {
    return {
      id: this.$route.params.id,
      order: {}
    }
  },
  computed: {
    ...mapGetters('orders', ['GET_ORDER'])
  },
  methods: {
    ...mapActions('orders', ['EDIT_ORDER']),
    async editOrder(payload) {
      await this.EDIT_ORDER(payload)
      this.$router.replace({ path: '/my-orders' })
    }
  },
  created() {
    this.order = { ...this.GET_ORDER(this.id) }
  }
}
</script>