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
<script>
import OrderService from '@/services/OrderService'
import Greeting from '@/components/Greeting.vue'
import Alert from '@/components/Alert.vue'
import Table from '@/components/Table.vue'

export default {
  components: {
    Alert,
    Greeting,
    Table
  },
  data() {
    return {
      orders: [],
      result: '',
      alertData: [
        { type: 'success', message: 'User registered!' },
        { type: 'danger', message: 'Login is taken!' }
      ]
    }
  },
  methods: {
    async showOrders() {
      const response = await OrderService.showOrders()
      this.orders = response.data
    },
    editOrder(id) {
      this.$router.push({name: 'editOrder'})
    },
    changeMode(newMode) {
      this.$store.commit('setMode', newMode)
    },
    fireCallback() {
      return this.mode === 'a' ? this.a() : this.b()
    },
    a() {
      this.result = 'AAA'
    },
    b() {
      this.result = 'BBB'
    }
  },
  computed: {
    mode() {
      return this.$store.getters.getMode
    },

    alertMessages() {
      return this.$store.getters.getErrors
    }
  }
}
</script>
<style lang="scss">
.order {
  border: 1px solid teal;
}
</style>
