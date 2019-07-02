<template>
  <div class="container">
    <h1>Orders</h1>
    <div class="row">
      <div class="col-sm-12 col-md-3 offset-md-1 text-left">
        {{filterDate}}
        {{managerID}}
        <form class="form-group" @sumbit.prevent="filterData">
          <label for="filterDate">Показать заказы начиная с ...</label>
          <input type="date" class="form-control" v-model="filterDate">
        </form>
      </div>
    </div>
    <div class="row">
      {{filteredTableDateOrders.length}}
      <Table :mode="mode" :tableData="filteredTableDateOrders"/>
    </div>
  </div>
</template>
<script>
/* Components */
import Table from '@/components/Table.vue'

/* Services */
import OrderService from '@/services/OrderService'
import dateEncoder from '@/services/dateEncoder'
export default {
  components: {
    Table
  },
  data() {
    return {
      mode: 'orders',
      filterDate: '',
      tableDataOrders: [
        { id: 123, orderNumber: '15003969', orderDate: '2019.06.15', orderPrice: '3500', orderCity: 'Псков' },
        { id: 123, orderNumber: '15023859', orderDate: '2019.06.15', orderPrice: '3500', orderCity: 'Псков' },
        { id: 123, orderNumber: '15002492', orderDate: '2019.05.15', orderPrice: '3500', orderCity: 'Псков' }
      ],
      managerID: 'a'
    }
  },
  computed: {
    filterDateDecoded() {
      return dateEncoder.decode(this.filterDate)
    },
    filteredTableDateOrders() {
      return this.tableDataOrders
      .filter(order => order.managerID == this.managerID ? true : false)
      .filter(order => order.orderDate >= this.filterDateDecoded ? true : false)
    }
  },
  async created() {
    this.tableDataOrders = await OrderService.showOrders()
  }
}
</script>
