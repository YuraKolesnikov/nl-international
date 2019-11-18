<template>
  <div class="card text-left">
    <div class="card-header">
      <h3>Edit User</h3>
    </div>
    <div class="card-body">
      <!-- TODO: Port to axios -->
      <form method="POST" @submit.prevent="updateManager({...fields})">
        <fieldset class="form-group">
          <label for="fullName">Full name</label>
          <input 
            id="fullName" 
            type="text" 
            name="fullName" 
            class="form-control"
            v-model="fields.fullName">
        </fieldset>
        <fieldset class="form-group">
          <label for="managerID">Manager ID</label>
          <input 
            id="managerID" 
            type="text" 
            name="managerID" 
            class="form-control"
            v-model="fields.managerID">
        </fieldset>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      user: { type: Object, default: () => {} },
      updateManager: { type: Function, default: () => null }
    },
    data() {
      return {
        fields: {
          fullName: '',
          managerID: ''
        }
      }
    },
    created() {
      this.fields = { ...this.user }
    }
  }
</script>