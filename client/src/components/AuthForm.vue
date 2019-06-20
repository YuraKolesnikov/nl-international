<template>
  <div class="card">
    <div class="row">
      <button class="btn btn-info" @click="mode = 'logIn'">{{ $t('logIn')}}</button>
      <button class="btn btn-info" @click="mode = 'register'">{{ $t('register') }}</button>
    </div>
    <div class="card-header">
      <h3>{{ $t(mode) }}</h3>
    </div>
    <div class="card-body">
      <!-- TODO: Change to axios method @submit.prevent="axios.signup" -->
      <form method="POST" action="/users/signup">
        <!-- Out of the loop -->
        <fieldset class="form-group">
          <label for="managerID">ID</label>
          <input
            id="managerID"
            type="text"
            name="managerID"
            class="form-control"
            autocomplete="false"
            placeholder="371-12345678"
            v-model="vModelFields.managerID"
          >
        </fieldset>
        <!-- Loop -->
        <!-- <fieldset class="form-group">
          <label for="fullName">{{ $t('fullName') }}</label>
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
          <label for="password">{{ $t('password') }}</label>
          <input
            id="password"
            type="password"
            name="password"
            class="form-control"
            autocomplete="false"
          >
          <small class="text-muted form-text">{{ $t('passwordInfo') }}</small>
        </fieldset>
        <fieldset class="form-group">
          <label for="password2">{{ $t('confirmPassword') }}</label>
          <input
            id="password2"
            type="password"
            name="password2"
            class="form-control"
            autocomplete="false"
          >
        </fieldset>-->
        <fieldset
          class="form-group"
          v-for="field in mode === 'register' ? formData.register.formFields : formData.logIn.formFields"
          :key="field.id"
        >
          <label :for="field.id">{{ $t(field.id) }}</label>
          <input
            class="form-control"
            autocomplete="false"
            :type="field.type"
            :name="field.id"
            :placeholder="field.placeholder"
            v-model="vModelFields[field.id]"
          >
          <small
            class="text-muted form-text"
            v-if="field.id === 'password' && mode == 'register'"
          >{{ $t('passwordInfo') }}</small>
        </fieldset>
        <ul>
          <li>{{vModelFields.managerID}}</li>
          <li>{{vModelFields.fullName}}</li>
          <li>{{vModelFields.password}}</li>
          <li>{{vModelFields.confirmPassword}}</li>
        </ul>
        <button type="submit" class="btn btn-primary">{{ $t('submit') }}</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: "logIn",
      formData: {
        logIn: {
          method: () => {
            this.logIn();
          },
          formFields: [{ type: "password", id: "password" }]
        },
        register: {
          method: () => {
            this.register();
          },
          formFields: [
            { type: "text", id: "fullName", placeholder: "George Clooney" },
            { type: "password", id: "password" },
            { type: "password", id: "confirmPassword" }
          ]
        }
      },
      vModelFields: {
        managerID: "",
        fullName: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    logIn() {
      console.log("Logged in!");
    },
    register() {
      console.log("Registered!");
    }
  }
};
</script>