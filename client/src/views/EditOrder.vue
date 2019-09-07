<template>
  <div>
    <h1>Editing order {{id}}</h1>
    <h2>Order: </h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 offset-md-3">
          {{order}}
          <OrderForm 
            :mode="'edit'" 
            :orderCallback="editOrder" 
            :fields="order" />
        </div>
      </div>
    </div>
  </div>
</template>