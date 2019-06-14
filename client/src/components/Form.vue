<template>
  <div class="card text-left">
    <div class="card-header">
      <h3>{{mode === 'create' ? 'Create' : 'Edit'}} Order</h3>
    </div>
    <div class="card-body">
      <form method="POST" action="/orders">
        <fieldset class="form-group">
          <label for="orderNumber">Order Number</label>
          <input id="orderNumber" type="text" name="orderNumber" class="form-control">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderDate">Order Date</label>
          <input id="orderDate" type="date" name="orderDate" class="form-control">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderPrice">Order Price</label>
          <input id="orderPrice" type="text" name="orderPrice" class="form-control">
        </fieldset>
        <fieldset class="form-group">
          <label for="orderCity">Order City</label>
          <select name="orderCity" id="orderCity" class="form-control">
            <option value disabled selected>Choose city</option>
            <option value="Псков">Псков</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
          </select>
        </fieldset>
        <button type="submit" class="btn btn-primary">Submit</button>
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