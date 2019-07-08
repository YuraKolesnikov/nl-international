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
              @click="redirectToEditItem(item._id)">
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
      await OrderService.deleteOrder(id)
    },

    redirectToEditItem(id) {
      let path = this.$props.mode === 'orders' ? `/orders/edit/${id}` : `users/edit/${id}`
      return this.$router.push({path})
    }
  },
  async created() {
    console.log(this.$props)
  }
}
</script>
<style lang="scss" scoped>
th, td {
  vertical-align: middle;
}
</style>
