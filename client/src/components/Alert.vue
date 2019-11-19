<template>
  <div class="alert-container">
    <div
      v-for="error in alerts"
      :key="error.id"
      class="alert"
      :class="{
        'alert-danger': error.status == 'error',
        'alert-success': error.status == 'success'
      }">
      <span>{{ $t(`${error.message}`) }}</span>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="REMOVE_ALERT(error.id)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    alerts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapMutations('messages', [ 'REMOVE_ALERT' ])
  }
};
</script>

<style lang="scss">
.alert-container {
  width: 400px;
  margin: 0 auto;
  z-index: 1000;
  position: absolute;
  top: 50px;
  right: 50px;
}

.alert {
  animation-name: slideInNFade;
  animation-duration: 6s;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@keyframes slideInNFade {
  0% {
    transform: translateX(500px);
  }
  
  2% {
    transform: translateX(0);
  }

  80% {
    transform: translate(0, 0);
    opacity: 1;
  }
  
  100% {
    transform: translateY(50px);
    opacity: 0;
  }
}
</style>