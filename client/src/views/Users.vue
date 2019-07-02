<template>
  <div class="container">
    <h1>{{ $t('managers') }}</h1>
    <div class="row">
      <Table :mode="mode" :tableData="tableData"/>
    </div>
  </div>
</template>
<script>
import Table from '@/components/Table'
import UserService from '@/services/UserService'
export default {
  components: {
    Table
  },
  data() {
    return {
      tableData: [
        { id: 1234, fullName: 'Yura Kolesnikov', managerID: '371-20582968' }
      ],
      users: [],
      mode: 'users',
    }
  },
  async created() {
    this.tableData = await UserService.showManagers()
  }
}
</script>