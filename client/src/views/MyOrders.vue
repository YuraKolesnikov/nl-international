<template>
  <div class="container">
    <h1>{{ $t('showOrders') }}</h1>
    <div class="row">
      <div class="col-sm-12 col-md-10 offset-md-1">
        {{filteredTableDateOrders}}
        <form class="form-group">
          <label for="filterDate">Найти заказ</label>
          <input 
            type="text" 
            class="form-control" 
            placeholder="По дате"
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
import OrderService from '@/services/OrderService'
import { decode } from '@/utils/dateEncoder'
import Table from '@/components/Table'
export default {
  components: { Table },
  data() {
    return {
      filterDate: '',
      filterNumber: '',
      mode: 'orders'
    }
  },
  computed: {
    filterDateDecoded() {
      return decode(this.filterDate)
    },
    filteredTableDateOrders() {
      return this.$store.state.orders.orders
      .filter(o => o.managerID == 'a')
      .filter(order => order.orderNumber.match(this.filterNumber))
      .filter(order => order.orderDate >= this.filterDateDecoded ? true : false)
    }
  },
  async created() {
    await this.$store.dispatch('getOrders')
  }
}
</script>
<style lang="scss" scoped>
.form-group {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  text-align: left;
  & label {
    flex-basis: 10%;
  }
  & input {
    flex-basis: 40%;
  }
}
</style>