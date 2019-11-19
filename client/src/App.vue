<template>
  <div id="app">
    <Alert 
      :alerts="alerts"
    />
    <Navbar
      :role="userRole"
      :isLoggedIn="isLoggedIn"
      :logOut="logOut"
    />
    <router-view/>
  </div>
</template>
<script>
import Alert from '@/components/Alert'
import Navbar from '@/components/Navbar'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  components: {
    Alert,
    Navbar
  },
  computed: {
    ...mapState('auth', ['isLoggedIn', 'userRole']),
    ...mapState('messages', ['alerts'])
  },
  methods: {
    ...mapActions('auth', ['LOGOUT']),
    ...mapMutations('messages', ['CLEAR_ALERTS']),
    async logOut() {
      await this.LOGOUT()
      this.$router.push({ path: '/users/auth' })
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
