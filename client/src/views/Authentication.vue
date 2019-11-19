<template>
  <div class="container mt-5 text-left">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <!-- <Alert v-for="(alert, index) in errors" :key="index" :data="alert" /> -->
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <AuthForm
          :formData="formData"
          @fireAuthRoutine="authenticate"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
import AuthForm from '@/components/AuthForm'
export default {
  components: {
    AuthForm
  },
  data() {
    return {
      formData: {
        managerID: '',
        fullName: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['REGISTER', 'LOGIN']),
    ...mapMutations('auth', ['LOG_IN', 'LOG_OUT']),
    async authenticate({ formData, mode }) {
      if (mode === 'register') {
        const response = await this.REGISTER(formData)
        if(response.status === 201) {
          this.alert(response.data)
        }
      } else {
        const response = await this.LOGIN(formData)
        if (response.status === 201) {
          this.$router.replace({ path: '/my-orders' })
          this.LOG_IN()
        }
      }
    }
  }
}
</script>