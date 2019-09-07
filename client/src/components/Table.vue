<template>
  <div class="col-sm-12 col-md-10 offset-md-1">
    <table class="table table-striped" v-if="tableData.length > 0">
      <thead class="thead-light">
        <tr class="text-left">
          <th scope="col">#</th>
          <th scope="col" v-for="(header, index) in tableHeaders" :key="index">
            {{ $t(`${header}`) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index" class="text-left">
          <td scope="row"><b>{{index + 1}}</b></td>
          <td v-for="(field, index) in tableKeys" :key="index">{{item[field]}}</td>
          <td>
            <button 
              class="btn btn-info mr-1"
              @click="redirectToEditItem(item)">
              <i class="fa fa-edit"></i>
            </button>
            <button 
              class="btn btn-danger ml-1"
              @click="deleteOrder(item)">
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No orders added</p>
  </div>
</template>
<script>
import tableFields from '@/services/tableFields'
import OrderService from '@/services/OrderService'
export default {
  props: ['mode', 'tableData'],
  computed: {
    tableHeaders() {
      return tableFields.headers[this.$props.mode]
    },
    tableKeys() {
      return tableFields.keys[this.$props.mode]
    }
  },
  methods: {
    redirectToEditItem(item) {
      if (this.mode == 'orders') {
        return  this.$router.push({ path: `/orders/edit/${item.orderNumber}` })
      }
      this.$router.push({ path: `/users/edit/${item.managerID}` })
      /* TODO: Get orderNumber and dispatch an action */
    },
    deleteOrder(item) {
      if (this.mode == 'orders') {
        return console.log('Deleting order...', item)
      }
      console.log('Deleting user...', item)
      /* TODO: Get orderNumber and dispatch an action */
    }
  }
}
</script>

<style lang="scss" scoped>
th, td {
  vertical-align: middle;
}
</style>
