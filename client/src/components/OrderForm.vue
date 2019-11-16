<template>
  <div class="card text-left">
    <div class="card-header">
      <h3>{{$t(mode === 'create' ? 'createOrder' : 'editOrder')}}</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="submit(fields)">
        <fieldset class="form-group">
          <label for="orderNumber">{{ $t('order.number') }}</label>
          <input
            type="text"
            class="form-control"
            v-model="fields.number"
            required
          />
        </fieldset>
        <fieldset class="form-group">
          <label for="orderDate">{{ $t('order.date') }}</label>
          <input
            type="date"
            class="form-control"
            v-model="fields.date"
            required
          />
        </fieldset>
        <fieldset class="form-group">
          <label for="orderPrice">{{ $t('order.price') }}</label>
          <input
            type="number"
            class="form-control"
            v-model="fields.price"
            required
          />
        </fieldset>
        <fieldset class="form-group">
          <label for="orderCity">{{ $t('order.city') }}</label>
          <select
            class="form-control"
            v-model="fields.city"
            required
          >
            <option value disabled selected>{{ $t('order.city') }}</option>
            <option value="Псков">Псков</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
          </select>
        </fieldset>
        <fieldset class="form-group" v-if="mode == 'edit'">
          <label for="orderStatus">Статус заказа</label>
          <select
            class="form-control"
            v-model="fields.status"
            required
          >
            <option value="0" default>Не выдан</option>
            <option value="1">Выдан частично</option>
            <option value="2">Выдан полностью</option>
          </select>
        </fieldset>
        <button type="submit" class="btn btn-primary">{{ $t('submit') }}</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mode: { type: String, default: '' },
    order: { type: Object, default: () => {} },
    submit: { type: Function, default: () => null }
  },
  data() {
    return {
      fields: {
        number: "",
        date: "",
        price: 0,
        city: "",
        status: "0"
      }
    };
  },
  created() {
    this.fields = { ...this.order }
  }
};
</script>