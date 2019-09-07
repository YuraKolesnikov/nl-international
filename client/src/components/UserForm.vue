<template>
  <div class="card text-left">
    <div class="card-header">
      <h3>Edit User</h3>
    </div>
    <div class="card-body">
      <!-- TODO: Port to axios -->
      <form method="POST" @submit.prevent="updateUser">
        <fieldset class="form-group">
          <label for="fullName">Full name</label>
          <input 
            id="fullName" 
            type="text" 
            name="fullName" 
            class="form-control"
            v-model="fullName">
        </fieldset>
        <fieldset class="form-group">
          <label for="managerID">Manager ID</label>
          <input 
            id="managerID" 
            type="text" 
            name="managerID" 
            class="form-control"
            v-model="managerID">
        </fieldset>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['user'],
  data() {
    return {
      fullName: 'Jurijs Kolesnikovs',
      managerID: '371-20582968'
    }
  },
  methods: {
    updateUser() {
      /* TODO: Dispath Vuex method */
    }
  }
}
</script>