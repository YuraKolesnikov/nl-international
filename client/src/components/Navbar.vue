<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">
      LOGO
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link class="nav-item" tag="li" v-for="link in links" :key="link.id" :to="link.path">
          <a class="nav-link">{{ $t(link.title)}}</a>
        </router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item"><a id="ru" class="nav-link language-toggle" @click="changeLocale">RU</a></li>
        <li class="nav-item"><a id="lv" class="nav-link language-toggle" @click="changeLocale">LV</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  props: ['test'],
  data() {
    return {
      x: this.$props.test,
      links: [
        { id: 1, path: '/', title: 'Home' },
        { id: 2, path: '/orders', title: 'allOrders' },
        { id: 10, path: '/orders-printable', title: 'allOrdersPrintable' },
        { id: 3, path: '/orders/add', title: 'createOrder' },
        { id: 4, path: '/users/logout', title: 'logOut' },
        { id: 5, path: '/users/auth', title: 'logIn' },
        { id: 6, path: '/users', title: 'managers' },
        { id: 7, path: '/users/edit', title: 'Исправить менеджера' },
        { id: 8, path: '/my-orders', title: 'showOrders' }
      ]
    }
  },
  methods: {
    changeLocale({target}) {
      this.$i18n.locale = target.id
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale
    }
  }
}
</script>
<style lang="scss">
.nav-item {
  cursor: pointer;
}
</style>
