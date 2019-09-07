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

<style lang="scss" scoped>
th, td {
  vertical-align: middle;
}
</style>
