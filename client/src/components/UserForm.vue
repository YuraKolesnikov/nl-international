<template>
  <div class="card text-left">
    <div class="card-header">
      <h3>Edit User</h3>
    </div>
    <div class="card-body">
      <!-- TODO: Port to axios -->
      <form method="POST" action="/users/edit">
        <fieldset class="form-group">
          <label for="fullName">Full name</label>
          <input id="fullName" type="text" name="fullName" class="form-control" :value="user.fullName">
        </fieldset>
        <fieldset class="form-group">
          <label for="managerID">Manager ID</label>
          <input id="managerID" type="text" name="managerID" class="form-control" :value="user.managerID">
        </fieldset>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['user']
}
</script>