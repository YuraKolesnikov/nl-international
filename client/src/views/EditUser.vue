<template>
  <div class="container">
    <h1>Editing user {{id}}</h1>
    <div class="row">
      <div class="col-md-6 col-sm-12 offset-md-3">
        <UserForm :user="user"/>
      </div>
    </div>
  </div>
</template>
<script>
import UserForm from '@/components/UserForm'
export default {
  components: { UserForm },
  data() {
    return {
      id: this.$route.params.id,
      /* TODO: Temp code, remove! */
      user: {
        managerID: '371-20582968',
        fullName: 'Jurijs Kolesnikovs'
      }
    }
  }
}
</script>