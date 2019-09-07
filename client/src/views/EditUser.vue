<template>
  <div class="container">
    <h1>Editing user {{id}}</h1>
    <div class="row">
      <div class="col-md-6 col-sm-12 offset-md-3">
        <UserForm :user="user"/>
      </div>
    </div>
  </div>
</template>