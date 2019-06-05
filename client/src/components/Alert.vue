<template>
  <div class="alert my-3" :class="`alert-${data.type}`" style="max-width: 540px; width: 100%; margin: auto;">
    {{data.message}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  }
}
</script>