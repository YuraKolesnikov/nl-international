<template>
  <div class="container">
    <h1>Orders printable</h1>
    <div class="row">
      <form class="form-group" @sumbit.prevent="filterData">
        <label for="filterDate">Показать заказы начиная с ...</label>
        <input type="date" class="form-control" v-model="filterDate">
      </form>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-10 offset-md-1">
        <table class="table">
          <thead class="thead-light">
            <tr class="text-left">
              <th scope="col">#</th>
              <th scope="col">ID менеджера</th>
              <th scope="col">Имя менеджера</th>
              <th scope="col">Заказы</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row" v-for="(manager, index) in tableDataOrders" :key="index" class="text-left">
              <td><b>{{index + 1}}</b></td>
              <td>{{manager.managerID}}</td>
              <td>{{manager.fullName}}</td>
              <td>
                <p 
                  v-for="order in manager.orders" 
                  :key="order.orderNumber">
                  {{order.orderNumber}} ({{order.orderDate}})
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
/* Components */
import Table from '@/components/Table.vue'

/* Services */
import dateEncoder from '@/services/dateEncoder'

export default {
  data() {
    return {
      mode: 'ordersPrintable',
      filterDate: '',
      tableDataOrders: [
        { 
          managerID: '371-20582968', 
          fullName: 'Yura Kolesnikov', 
          orders: [
            { orderNumber: '20582968', orderDate: '15.06.2019' },
            { orderNumber: '12345678', orderDate: '16.06.2019' }
          ]
        }
      ]
    }
  },
  computed: {
    filterDateDecoded() {
      return dateEncoder.decode(this.filterDate)
    },
    filteredTableDateOrders() {
      return this.tableDataOrders.filter(order => {
        return order.orderDate >= this.filterDateDecoded ? true : false
      })
    }
  }
}
</script>
