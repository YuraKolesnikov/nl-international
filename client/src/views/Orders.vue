<template>
  <div class="container">
    <h1>{{ $t('allOrders') }}</h1>
    <div class="row">
      <div class="col-sm-12 col-md-3 offset-md-1 text-left">
        <form class="form-group">
          <label for="filterDate">Показать заказы начиная с ...</label>
          <input 
            type="date" 
            class="form-control" 
            v-model="filterDate"
            @change="filterOrders">
        </form>
      </div>
    </div>
    <div class="row">
      <Table :mode="mode" :tableData="filteredTableDateOrders"/>
    </div>
  </div>
</template>
<script>
import Table from '@/components/Table'
import { decode } from '@/utils/dateEncoder'
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
      ]
    }
  },
  methods: {
    filterOrders() {
      console.log('Filtering orders...')
    }
  },
  computed: {
    filterDateDecoded() {
      return decode(this.filterDate)
    },
    filteredTableDateOrders() {
      return this.tableDataOrders
      .filter(order => order.orderDate >= this.filterDateDecoded ? true : false)
    }
  }/* ,
  async mounted() {
    const response = await OrderService.showOrders()
    this.tableDataOrders = response.orders
  } */
}
</script>