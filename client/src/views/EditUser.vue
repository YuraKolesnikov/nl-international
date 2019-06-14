<template>
  <div class="container">
    <h1>Edit User</h1>
    <div class="row">
      <div class="col-md-6 col-sm-12 offset-md-3">
        <!-- TODO: Make a prop for Form - mode - 'edit' || 'create' -->
        <UserForm :user="user"/>
      </div>
    </div>
  </div>
</template>
<script>
import UserForm from '@/components/UserForm'
export default {
  components: {
    UserForm
  },
  data() {
    return {
      user: {
        fullName: 'Yura Kolesnikov',
        managerID: '371-20582968'
      }
    }
  }
}
</script>