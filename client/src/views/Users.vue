<template>
  <div class="container">
    <h1>{{ $t('managers') }}</h1>
    <div class="row">
      <Table :mode="mode" :tableData="tableData"/>
    </div>
  </div>
</template>