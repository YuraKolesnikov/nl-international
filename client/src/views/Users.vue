<template>
  <div class="container">
    <h1>Users</h1>
    <div class="row">
      <Table :mode="mode" :tableData="tableData"/>
    </div>
  </div>
</template>
<script>
import Table from '@/components/Table'
export default {
  components: {
    Table
  },
  data() {
    return {
      tableData: [
        { id: 1234, fullName: 'Yura Kolesnikov', managerID: '371-20582968' }
      ],
      mode: 'users',
    }
  }
}
</script>