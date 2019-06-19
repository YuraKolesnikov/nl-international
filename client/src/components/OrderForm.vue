<template>
  <div class="card text-left">
    <div class="card-header">
      <button class="btn btn-primary" @click="mode === 'create' ? mode = 'edit' : mode = 'create'">Change mode</button>
      <!-- TODO: Pass the prop 'mode' -->
      <h3>{{mode === 'create' ? 'Create' : 'Edit'}} Order</h3>
    </div>
    <div class="card-body">
      <!-- TODO: Port to axios -->
      <form method="POST" action="/orders">
        <fieldset class="form-group">
          <label for="orderNumber">{{ $t('order.number') }}</label>
          <input id="orderNumber" type="text" name="orderNumber" class="form-control">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderDate">{{ $t('order.date') }}</label>
          <input id="orderDate" type="date" name="orderDate" class="form-control">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderPrice">{{ $t('order.price') }}</label>
          <input id="orderPrice" type="text" name="orderPrice" class="form-control">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderCity">{{ $t('order.city') }}</label>
          <select name="orderCity" id="orderCity" class="form-control">
            <option value disabled selected>{{ $t('order.city') }}</option>
            <option value="Псков">Псков</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
          </select>
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
      mode: 'edit'
    }
  }
}
</script>