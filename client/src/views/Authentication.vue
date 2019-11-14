<template>
  <div class="container mt-5 text-left">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <!-- <Alert v-for="(alert, index) in errors" :key="index" :data="alert" /> -->
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        {{ formData }}
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
    ...mapActions('auth', ['REGISTER', 'SIGN_IN', 'SIGN_OUT']),
    ...mapMutations('auth', ['LOG_IN', 'LOG_OUT']),
    async authenticate({ formData }) {
      const response = await this.REGISTER(formData)
      console.log(response)
      if(response.status === 201) {
        this.alert(response.data)
      }
    }
  }
}
</script>