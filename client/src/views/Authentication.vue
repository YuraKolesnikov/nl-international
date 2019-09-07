<template>
  <div class="container mt-5 text-left">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <!-- <Alert v-for="(alert, index) in errors" :key="index" :data="alert" /> -->
      </div>
    </div>
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
  }
}
</script>