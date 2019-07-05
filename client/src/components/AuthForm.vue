<template>
  <div class="card">
    <div class="card-header">
      <div class="mb-2">
        <button 
          class="btn btn-custom" 
          :class="{'active': mode === 'logIn'}" 
          @click="setMode('logIn')">{{ $t('logIn')}}</button>
        <button 
          class="btn btn-custom" 
          :class="{'active': mode === 'register'}" 
          @click="setMode('register')">{{ $t('register') }}</button>
      </div>
      <h3>{{ $t(mode) }}</h3>
      
    </div>
    <div class="card-body">
      <!-- TODO: Change to axios method @submit.prevent="axios.signup" -->
      {{mode}}
      <form @submit.prevent="fireAuthRoutine">
        <!-- Out of the loop -->
        <!-- <fieldset class="form-group">
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
        </fieldset> -->
        <fieldset class="form-group">
          <label for="mail">Mail</label>
          <input
            id="mail"
            type="text"
            name="mail"
            class="form-control"
            autocomplete="false"
            placeholder="john.doe@gmail.com"
            v-model="vModelFields.mail"
          >
        </fieldset>
        <fieldset class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            type="text"
            name="password"
            class="form-control"
            autocomplete="false"
            placeholder="12345678"
            v-model="vModelFields.password"
          >
        </fieldset>
        <fieldset class="form-group">
          <label for="password">Repeat password</label>
          <input
            id="password2"
            type="text"
            name="password"
            class="form-control"
            autocomplete="false"
            placeholder="12345678"
            v-model="vModelFields.password2"
          >
        </fieldset>
        <!-- <fieldset
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
        </fieldset> -->
        <button type="submit" class="btn btn-primary">{{ $t('submit') }}</button>
      </form>
      <button @click="postTest">Post Test</button>
    </div>
  </div>
</template>
<script>
import UserService from '@/services/UserService'
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      token: '',
      formData: {
        logIn: {
          formFields: [
            { type: 'text', id: 'mail' },
            { type: 'password', id: 'password' }
          ]
        },
        register: {
          formFields: [
            /* { type: "text", id: "fullName", placeholder: "George Clooney" }, */
            { type: 'text', id: 'mail' },
            { type: "password", id: "password" },
            /* { type: "password", id: "confirmPassword" } */
          ]
        }
      },
      vModelFields: {
        managerID: '',
        fullName: '',
        mail: '',
        password: '',
        password2: ''
      }
    };
  },
  methods: {
    setMode(newMode) {
      this.$store.commit('setMode', newMode)
    },
    fireAuthRoutine() {
      return this.mode === 'logIn' ? this.login() : this.signup()
    },
    login() {
      console.log('Login routine fired')
      const payload = {
        mail: this.vModelFields.mail,
        password: this.vModelFields.password
      }
      console.log('Payload', payload)

    },
    signup() {
      this.$store.commit('clearErrors')
      if (this.vModelFields.password != this.vModelFields.password2) {
        const newError = {
          type: 'danger',
          message: 'Passwords don\'t match!'
        }
        this.$store.commit('addError', newError)
      }
      const payload = {
        mail: this.vModelFields.mail,
        password: this.vModelFields.password
      }
      console.log('Payload', payload)
    },
    async logIn() {
      console.log('logIn routine fired')
      const payload = {
        mail: this.vModelFields.mail,
        password: this.vModelFields.password
      }
      console.log('Payload', payload)

      try {
        const response = await UserService.logIn(payload)
        this.$store.commit('setToken', response.token)
        this.token = this.$store.getters.getToken
      } catch (error) {
        
      }
      /* try {
        const response = await UserService.logIn(payload)

        this.user = response.data
        this.$store.commit('setToken', this.user.token)
        this.token = this.$store.getters.getToken
      } catch (error) {
        this.user = error
      } */
    },
    async register() {
      if (this.vModelFields.password != this.vModelFields.password2) {
        const newError = {
          type: 'danger',
          message: 'Passwords don\'t match!'
        }
        return this.$store.commit('addError', newError)
      }
      const payload = {
        mail: this.vModelFields.mail,
        password: this.vModelFields.password
      }

      try {
        const response = await UserService.register(payload)
        console.log(response)
      } catch (error) {
        
      }
    },
    async postTest() {
      console.log('Started postTest')
      const payload = {
        id: 1,
        mail: 'cezar278@inbox.lv',
        password: '12345'
      }
      try {
        const response = await UserService.postTest(payload, this.token)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    mode() {
      return this.$store.getters.getMode
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
