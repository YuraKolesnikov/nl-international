<template>
  <div class="col-sm-12 col-md-10 offset-md-1">
    <table class="table table-striped" v-if="tableData.length > 0">
      <thead class="thead-light">
        <tr class="text-left">
          <th scope="col">#</th>
          <th scope="col" v-for="(header, index) in tableHeaders" :key="index">
            {{header}}
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
              @click="redirectToEditOrder(item._id)">
              <i class="fa fa-edit"></i>
            </button>
            <button 
              class="btn btn-danger ml-1"
              @click="deleteOrder(item._id)">
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
  data() {
    return {
      /* tableHeaders: tableFields.headers[this.$props.mode],
      tableKeys: tableFields.keys[this.$props.mode] */
    }
  },
  computed: {
    tableHeaders() {
      return tableFields.headers[this.$props.mode]
    },
    tableKeys() {
      return tableFields.keys[this.$props.mode]
    }
  },
  methods: {
    async deleteOrder(id) {
      console.log(id)
      await OrderService.deleteOrder(id)
    },
    redirectToEditOrder(id) {
      this.$router.push({path: `/orders/edit/${id}`})
    }
  }
}
</script>
<style lang="scss" scoped>
th, td {
  vertical-align: middle;
}
</style>
