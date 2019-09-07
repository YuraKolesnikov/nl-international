<template>
  <div class="container">
    <h1>Orders printable</h1>
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
            <tr scope="row" v-for="(manager, index) in filteredTableDateOrders" :key="index" class="text-left">
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
import OrderService from '@/services/OrderService'
import Table from '@/components/Table'
import { decode } from '@/services/dateEncoder'
export default {
  data() {
    return {
      filterDate: '',
      tableDataOrders: []
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
      .map(manager => {
        const { managerID, fullName, orders } = manager
        return {
          managerID,
          fullName,
          orders: orders.filter(order => order.orderDate >= this.filterDateDecoded)
        }
      })
      .filter(manager => manager.orders.length > 0)
    }
  },
  async mounted() {
    this.tableDataOrders = await OrderService.showOrdersPrintable()
  }
}
</script>