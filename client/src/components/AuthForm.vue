<template>
  <div class="card">
    <div class="card-header">
      <div class="mb-2">
        <button class="btn btn-custom" :class="{'active': mode === 'logIn'}" @click="mode = 'logIn'">{{ $t('logIn')}}</button>
        <button class="btn btn-custom" :class="{'active': mode === 'register'}" @click="mode = 'register'">{{ $t('register') }}</button>
      </div>
      <h3>{{ $t(mode) }}</h3>
      
    </div>
    <div class="card-body">
      <!-- TODO: Change to axios method @submit.prevent="axios.signup" -->
      <form @submit.prevent="logData">
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
    logData() {
      this.mode === 'logIn' ? console.log('Logging in!') : console.log('Registering!')
      console.log(this.vModelFields)
    }
  }
};
</script>
<style lang="scss">
.btn-custom {
  border: 1px solid #4da3ff;
  border-radius: 0;

  &:nth-child(1) {
    border-right-width: 0;
  }

  &:active, &:focus {
    outline: none !important;
  }

  &.active {
    background-color: #e5f2ff;
  }
}
</style>
