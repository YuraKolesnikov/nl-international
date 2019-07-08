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
      <form @submit.prevent="fireAuthRoutine">
        <!-- Out of the loop -->
        <fieldset class="form-group">
          <label for="managerID">ID</label>
          <input
            id="managerID"
            type="text"
            name="managerID"
            class="form-control"
            required
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
            required
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
import UserService from '@/services/UserService'
export default {
  data() {
    return {
      token: '',
      response: {},
      dataForAlert: [],
      formData: {
        logIn: {
          formFields: [
            { type: 'password', id: 'password' }
          ]
        },
        register: {
          formFields: [
            { type: "text", id: "fullName", placeholder: "George Clooney" },
            { type: "password", id: "password" },
            { type: "password", id: "password2" }
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
      return this.mode === 'logIn' ? this.logIn() : this.register()
    },

    async logIn() {
      const payload = {
        managerID: this.vModelFields.managerID,
        password: this.vModelFields.password
      }

      try {
        const response = await UserService.logIn(payload)
        this.$store.commit('logIn')
        this.$store.commit('setUser', response.user)
        this.$router.push({ path: '/my-orders' })
      } catch (error) {
        
      }
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
        managerID: this.vModelFields.managerID,
        fullName: this.vModelFields.fullName,
        password: this.vModelFields.password
      }

      this.response = await UserService.register(payload)
      if (this.response.status === 400) {
        return this.$store.commit('addError', {
          type: 'danger',
          message: this.response.statusText
        })
      }
      this.$store.commit('addError', {
        type: 'success',
        message: 'Successfully registered!'
      })
      this.$router.push({ path: '/my-orders' })
    }
  },

  computed: {
    mode() {
      return this.$store.getters.getMode
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },

  async created() {
    await this.$store.commit('clearErrors')
  }
};
</script>
<style lang="scss" scoped>
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
