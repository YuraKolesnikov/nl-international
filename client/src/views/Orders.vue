<template>
  <div class="container">
    <h1>Orders</h1>
    <div class="row">
      <form class="form-group" @sumbit.prevent="filterData">
        <label for="filterDate">Показать заказы начиная с ...</label>
        {{filterDate}}
        {{testDate}}
        {{filterDateDecoded}}
        {{test}}
        <input type="date" class="form-control" v-model="filterDate">
        <input type="date" name="test" id="test" :value="test">
      </form>
    </div>
    <div class="row">
      <Table :mode="mode" :tableData="filteredTableDateOrders"/>
    </div>
  </div>
</template>
<script>
/* Components */
import Table from '@/components/Table.vue'

/* Services */
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
      ]
    }
  },
  computed: {
    filterDateDecoded() {
      return dateEncoder.decode(this.filterDate)
    },
    filteredTableDateOrders() {
      return this.tableDataOrders.filter(order => {
        console.log(order.orderDate, this.filterDateDecoded)
        console.log(order.orderDate >= this.filterDateDecoded)
        return order.orderDate >= this.filterDateDecoded ? true : false
      })
    },
    testDate() {
      return dateEncoder.decodeForDisplay(this.filterDate)
    },
    test() {
      return dateEncoder.encode('25.12.2001')
    }
  }
}
</script>
