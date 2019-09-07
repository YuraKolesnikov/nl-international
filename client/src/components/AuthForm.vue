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
