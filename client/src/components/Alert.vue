<template>
  <div class="alert my-3" :class="`alert-${data.type}`">
    {{data.message}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
<style lang="scss">
.alert {
  max-width: 540px;
  width: 100%;
  margin: auto;
}
</style>
