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
  import { mapActions, mapState } from 'vuex'
import Table from '@/components/Table'
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
    ...mapState('admin', ['managers', 'data']),
    filteredManagers() {
      return this.managers
      .filter(manager => manager.managerID.match(this.filterID))
      .filter(manager => manager.fullName.match(this.filterName))
    }
  },
  methods: {
    ...mapActions('admin', ['GET_MANAGERS'])
  },
  async created() {
    await this.GET_MANAGERS()
  }
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