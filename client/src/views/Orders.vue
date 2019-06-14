<template>
  <div class="container">
    <h1>Orders</h1>
    <div class="row">
      <form class="form-group" @sumbit.prevent="filterData">
        <label for="filterDate">Показать заказы начиная с ...</label>
        <input type="date" class="form-control" v-model="filterDate">
        {{filterDate}}
        <button type="submit" class="btn btn-primary mt-2">Показать</button>
      </form>
    </div>
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
      filterDate: '',
      tableDataOrders: [
        { id: 123, orderNumber: '15003969', orderDate: '15.06', orderPrice: '3500', orderCity: 'Псков' },
        { id: 123, orderNumber: '15023859', orderDate: '15.05', orderPrice: '3500', orderCity: 'Псков' },
        { id: 123, orderNumber: '15002492', orderDate: '16.05', orderPrice: '3500', orderCity: 'Псков' }
      ]
    }
  },
  methods: {
    changeMode(mode) {
      /* TODO: Extract to $store. Just make this data reactive. Or leave it as it is
        because mode changing option on-the-fly is not neccessary ? */
      this.mode = mode
      return this.mode
    },
    filterData() {
      const [day, month, year] = date.split('.')
      const parsedDate = `${year}-${month}-${day}`
      console.log(`Filtering by ${parsedDate}`)
    }
  }
}
</script>
