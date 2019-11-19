<template>
  <div class="container">
    <h1>{{ $t('allOrders') }}</h1>
    <div class="row">
      <div class="col-sm-12 col-md-10 offset-md-1">
        <form class="form-group">
          <label for="filterDate">Найти заказы</label>
          <input
            type="date"
            class="form-control"
            v-model="filterDate">
          <input
            type="text"
            class="form-control"
            v-model="filterNumber"
            placeholder="По номеру">
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
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    Table
  },
  data() {
    return {
      filterDate: '',
      filterNumber: '',
      mode: 'orders'
    }
  },
  methods: {
    filterOrders() {
      console.log('Filtering orders...')
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