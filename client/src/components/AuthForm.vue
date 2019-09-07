<template>
  <div class="card">
    <div class="card-header">
      {{formData}}
      {{mode}}
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
      <form @submit.prevent="authenticateUser">
        <fieldset class="form-group">
          <label for="managerID">ID</label>
          <input
            id="managerID"
            type="text"
            name="managerID"
            class="form-control"
            required
            placeholder="371-12345678"
            v-model="formData.managerID">
        </fieldset>
        <fieldset
          class="form-group"
          v-for="field in mode === 'register' ? formFields.register : formFields.logIn"
          :key="field.id">
          <label :for="field.id">{{ $t(field.id) }}</label>
          <input
            class="form-control"
            required
            :type="field.type"
            :name="field.id"
            :placeholder="field.placeholder"
            v-model="formData[field.id]">
          <small
            class="text-muted form-text"
            v-if="field.id === 'password' && mode == 'register'">
            {{ $t('passwordInfo') }}
          </small>
        </fieldset>
        <button type="submit" class="btn btn-primary">{{ $t('submit') }}</button>
      </form>
    </div>
  </div>
</template>
<script>
import UserService from '@/services/UserService'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      mode: 'logIn',
      formFields: {
        logIn: [ { type: 'password', id: 'password' } ],
        register: [
          { type: "text", id: "fullName", placeholder: "George Clooney" },
          { type: "password", id: "password" },
          { type: "password", id: "password2" }
        ]
      },
      formData: {
        managerID: '',
        fullName: '',
        password: '',
        password2: ''
      }
    }
  },
  created() {
    console.log(this.$store.logIn)
  },
  methods: {
    ...mapActions(['logIn']),
    setMode(newMode) {
      this.mode = newMode
    },
    async authenticateUser(e) {
      const response = await this.logIn(this.formData)
    }
  }
}
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
