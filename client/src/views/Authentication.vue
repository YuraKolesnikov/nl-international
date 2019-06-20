<template>
  <div class="container mt-5 text-left">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <AuthForm />
      </div>
    </div>
  </div>
</template>
<script>
import AuthForm from '@/components/AuthForm'
export default {
  components: {
    AuthForm
  },
  data() {
    return {
      mode: 'login'
    }
  },
  methods: {
    changeMode(mode) {
      return this.mode = mode
    }
  }
}
</script>
