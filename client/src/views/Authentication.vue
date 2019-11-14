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
  methods: {
    ...mapActions('auth', ['SIGN_IN', 'SIGN_OUT']),
    ...mapMutations('auth', ['LOG_IN', 'LOG_OUT']),
    authenticate({ formData, mode }) {
      this.SIGN_IN(formData)
    }
  }
}
</script>