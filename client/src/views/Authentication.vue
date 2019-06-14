<template>
  <div class="container mt-5 text-left">
    <div class="row">
      <button class="btn btn-info" @click="changeMode('login')">Login</button>
      <button class="btn btn-info" @click="changeMode('register')">Register</button>
    </div>
    <div class="row justify-content-center" v-if="mode==='login'">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Login</h3>
          </div>
          <div class="card-body">
            <form method="POST" action="/users/login">
              <fieldset class="form-group">
                <label for="id">ID</label>
                <input
                  id="managerID"
                  type="text"
                  name="managerID"
                  class="form-control"
                  placeholder="371-12345678"
                  required
                >
              </fieldset>
              <fieldset class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" name="password" class="form-control" required>
              </fieldset>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" v-if="mode==='register'">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Register</h3>
          </div>
          <div class="card-body">
            <form method="POST" action="/users/signup">
              <fieldset class="form-group">
                <label for="id">ID</label>
                <input
                  id="managerID"
                  type="text"
                  name="managerID"
                  class="form-control"
                  autocomplete="false"
                  placeholder="371-12345678"
                >
              </fieldset>
              <fieldset class="form-group">
                <label for="fullName">Full name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  class="form-control"
                  autocomplete="false"
                  placeholder="George Clooney"
                >
              </fieldset>
              <fieldset class="form-group">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  class="form-control"
                  autocomplete="false"
                >
                <small class="text-muted form-text">Your password should be blah-blah</small>
              </fieldset>
              <fieldset class="form-group">
                <label for="password2">Confirm Password</label>
                <input
                  id="password2"
                  type="password"
                  name="password2"
                  class="form-control"
                  autocomplete="false"
                >
              </fieldset>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
