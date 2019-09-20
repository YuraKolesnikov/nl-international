<template>
  <div class="container">
    <h1>{{ $t('managers') }}</h1>
    <div class="row">
      <div class="col-sm-12 col-md-10 offset-md-1">
        <form class="form-group">
          <label for="filterDate">Найти менеджера</label>
          <input 
            type="text" 
            class="form-control" 
            v-model="filterID"
            placeholder="По айди">
          <input 
            type="text" 
            class="form-control" 
            v-model="filterName"
            placeholder="По имени">
        </form>
      </div>
      <Table :mode="mode" :tableData="filteredManagers"/>
    </div>
  </div>
</template>
<script>
import Table from '@/components/Table'
import UserService from '@/services/UserService'
export default {
  components: { Table },
  data() {
    return {
      mode: 'users',
      filterID: '',
      filterName: '',
      tableData: []
    }
  },
  created() {
    console.log(this.tableData)
  },
  computed: {
    filteredManagers() {
      return this.tableData
      .filter(manager => manager.managerID.match(this.filterID))
      .filter(manager => manager.fullName.match(this.filterName))
    }
  }/* ,
  async created() {
    this.tableData = await UserService.showManagers()
    console.log(this.tableData)
  } */
}
</script>
.<style lang="scss" scoped>
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