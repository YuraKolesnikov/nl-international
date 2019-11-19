<template>
  <div class="container">
    <h1>{{ $t('showOrders') }}</h1>
    <div class="row">
      <div class="col-sm-12 col-md-10 offset-md-1">
        <form class="form-group">
          <label for="filterDate">{{ $t('findOrder') }}</label>
          <input 
            type="date"
            class="form-control" 
            placeholder="По дате"
            v-model="filterDate">
          <input 
            type="text" 
            class="form-control" 
            v-model="filterNumber"
            :placeholder="`${$t('findByNumber')}`">
        </form>
      </div>
    </div>
    <div class="row">
      <Table :mode="mode" :tableData="filteredTableDateOrders" @deleteOrder="deleteOrder" />
    </div>
  </div>
</template>
<script>
import { decode } from '@/utils/dateEncoder'
import Table from '@/components/Table'
import { mapState, mapActions } from 'vuex'
export default {
  components: { Table },
  data() {
    return {
      filterDate: '',
      filterNumber: '',
      mode: 'orders',
      tableData: []
    }
  },
  computed: {
    ...mapState('auth', ['managerID']),
    ...mapState('orders', ['orders']),
    filterDateDecoded() {
      return decode(this.filterDate)
    },
    filteredTableDateOrders() {
      return this.orders
      .filter(order => order.number.match(this.filterNumber))
      .filter(order => order.date >= this.filterDate ? true : false)
    }
  },
  methods: {
    ...mapActions('orders', ['GET_ORDERS', 'DELETE_ORDER']),
    async deleteOrder(number) {
      await this.DELETE_ORDER({ number, managerID: this.managerID })
      await this.GET_ORDERS(this.managerID)
    }
  },
  async created() {
    this.GET_ORDERS(this.managerID)
  }
}
</script>
<style lang="scss" scoped>
.form-group {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  & label { margin: 0; }
  & input { flex-basis: 40%; }
}
</style>