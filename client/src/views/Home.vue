<template>
  <div class="about container mt-5">
    <h1>This is a home page</h1>
    <Greeting />
    <div class="container">
    </div>
  </div>
</template>
<script>
import Greeting from '@/components/Greeting'
export default {
  components: {
    Greeting
  }
}
</script>
<style lang="scss">
.order {
  border: 1px solid teal;
}
</style>
