<template>
  <div class="about">
    <h1>This is a home page</h1>
    <Alert v-for="(alert, index) in alertMessages" :key="index" :data="alert" />
    <Greeting />
    <div class="container">
      <!-- <div class="row">
        <div class="col-sm-12" v-for="item in alertData" :key="item.type">
          <Alert :data="item"/>
        </div>
      </div> -->
      <div class="row">
        {{mode}}
        {{result}}
        <button @click="changeMode('a')">A</button>
        <button @click="changeMode('b')">B</button>
        <button @click="fireCallback">Fire callback</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.order {
  border: 1px solid teal;
}
</style>
