<template>
  <div class="card text-left">
    <div class="card-header">
      <h3>{{$t(mode === 'create' ? 'createOrder' : 'editOrder')}}</h3>
    </div>
    <div class="card-body">
      <form @submit.prevent="orderMethod">
        <fieldset class="form-group">
          <label for="orderNumber">{{ $t('order.number') }}</label>
          <input
            id="orderNumber"
            type="text"
            name="orderNumber"
            class="form-control"
            v-model="fields.orderNumber"
            required
          />
        </fieldset>
        <fieldset class="form-group">
          <label for="orderDate">{{ $t('order.date') }}</label>
          <input
            id="orderDate"
            type="date"
            name="orderDate"
            class="form-control"
            v-model="fields.orderDate"
            required
          />
        </fieldset>
        <fieldset class="form-group">
          <label for="orderPrice">{{ $t('order.price') }}</label>
          <input
            id="orderPrice"
            type="text"
            name="orderPrice"
            class="form-control"
            v-model="fields.orderPrice"
            required
          />
        </fieldset>
        <fieldset class="form-group">
          <label for="orderCity">{{ $t('order.city') }}</label>
          <select
            name="orderCity"
            id="orderCity"
            class="form-control"
            v-model="fields.orderCity"
            required
          >
            <option value disabled selected>{{ $t('order.city') }}</option>
            <option value="Псков">Псков</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
          </select>
        </fieldset>
        <fieldset class="form-group" v-if="mode === 'edit'">
          <label for="orderStatus">Статус заказа</label>
          <select
            name="orderStatus"
            id="orderStatus"
            class="form-control"
            v-model="fields.orderStatus"
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
  props: ["mode", "order"],
  data() {
    return {
      fields: {
        orderNumber: "",
        orderDate: "",
        orderPrice: "",
        orderCity: "",
        orderStatus: ""
      }
    };
  },
  created() {
    if (this.order == undefined) return;
    else if (this.order !== undefined) {
      [...Object.keys(this.fields)].forEach(key => {
        this.fields[key] = this.order[key];
      });
    }
  },
  methods: {
    orderMethod() {
      this.mode === "create" ? this.createOrder() : this.editOrder();
    },
    createOrder() {
      console.log("OrderForm: Request passing to Vuex", this.fields);
      this.$store.dispatch("createOrder", {
        ...this.fields,
        managerID: "a",
        fullName: "Jurijs Kolesnikovs"
      });
      this.$router.push({ path: '/my-orders' })
    },
    editOrder() {
      let payload = {
        ...this.fields,
        /* TODO: Replace with token */
        managerID: "a",
        fullName: "Jurijs Kolesnikovs"
      }
      let id = "123"; /* Mongoose id, temp solution, need to rebuild backend */
      console.log("Editing order...", { ...this.fields });
      this.$store.dispatch("editOrder", {id, payload});
      this.$router.push({ path: '/my-orders' })
    }
  }
};
</script>