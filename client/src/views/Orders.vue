<template>
  <div class="container">
    <h1>Orders</h1>
    <div class="row">
      <Table :mode="mode" :tableData="tableDataOrders"/>
    </div>
  </div>
</template>
<script>
import Table from '@/components/Table.vue'
export default {
  components: {
    Table
  },
  data() {
    return {
      mode: 'orders',
      tableDataOrders: [
        { id: 123, orderNumber: '15003969', orderDate: '15.08.1993', orderPrice: '3500', orderCity: 'Псков' }
      ]
    }
  },
  methods: {
    changeMode(mode) {
      /* TODO: Extract to $store. Just make this data reactive. Or leave it as it is
        because mode changing option on-the-fly is not neccessary ? */
      this.mode = mode
      return this.mode
    }
  }
}
</script>
