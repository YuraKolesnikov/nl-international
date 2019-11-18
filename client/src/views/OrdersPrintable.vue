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
            <tr scope="row" v-for="(manager, index) in data" :key="index" class="text-left">
              <td><b>{{index + 1}}</b></td>
              <td>{{manager.managerID}}</td>
              <td>{{manager.fullName}}</td>
              <td>
                <p
                  v-for="order in manager.orders" 
                  :key="order.number">
                  {{order.number}} ({{order.date}})
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
import Table from '@/components/Table'
import { decode } from '@/utils/dateEncoder'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      filterDate: '',
      tableDataOrders: []
    }
  },
  methods: {
    async filterOrders() {
      console.log('Filtering orders...')
      await this.GET_ORDERS_PRINTABLE(this.filterDate)
    },
    ...mapActions('admin', ['GET_ORDERS_PRINTABLE'])
  },
  filters: {
    filterDateDecoded() {
      return decode(this.filterDate)
    }
  },
  computed: {
    ...mapState('admin', ['data']),
    filteredTableDateOrders() {
      return this.data
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
  async created() {
    await this.GET_ORDERS_PRINTABLE()
  }/* ,
  async mounted() {
    this.tableDataOrders = await OrderService.showOrdersPrintable()
  } */
}
</script>