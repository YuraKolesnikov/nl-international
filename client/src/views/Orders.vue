<template>
  <div class="container">
    <h1>{{ $t('allOrders') }}</h1>
    <div class="row">
      <div class="col-sm-12 col-md-3 offset-md-1 text-left">
        <form class="form-group" @sumbit.prevent="filterData">
          <label for="filterDate">Показать заказы начиная с ...</label>
          <input type="date" class="form-control" v-model="filterDate">
        </form>
      </div>
    </div>
    <div class="row">
      <Table :mode="mode" :tableData="filteredTableDateOrders"/>
    </div>
  </div>
</template>