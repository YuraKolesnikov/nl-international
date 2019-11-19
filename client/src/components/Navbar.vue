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
      <ul 
        class="navbar-nav">
        <router-link
          class="nav-item"
          tag="li"
          to="/users/auth"
          v-if="!isLoggedIn">
          {{ $t('account') }}
        </router-link>
      </ul>
      <ul 
        class="navbar-nav">
        <template
          v-for="link in visibleLinks">
          <router-link
            class="nav-item"
            tag="li"
            v-if="isLoggedIn"
            :key="link.id"
            :to="link.path">
            <a class="nav-link">
              {{ $t(link.title) }}
            </a>
          </router-link>
        </template>
        <router-link 
          class="nav-item" 
          tag="li" 
          to="/" 
          @click.native="logOut"
          v-if="isLoggedIn">
          <a class="nav-link">
            {{ $t('logOut') }}
          </a>
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
  props: {
    isLoggedIn: { type: Boolean, default: false },
    logOut: { type: Function, default: () => null },
    role: { type: Function, default: 0 }
  },
  data() {
    return {
      links: [
        { id: 1, path: '/my-orders', title: 'showOrders', adminOnly: false },
        { id: 2, path: '/orders/add', title: 'createOrder', adminOnly: false },
        { id: 5, path: '/orders', title: 'allOrders', adminOnly: true },
        { id: 3, path: '/orders-printable', title: 'allOrdersPrintable', adminOnly: true },
        { id: 4, path: '/users', title: 'managers', adminOnly: true }
      ]
    }
  },
  methods: {
    changeLocale({ target }) {
      this.$i18n.locale = target.id
    }
  },
  computed: {
    visibleLinks() {
      return this.role === 0 ? this.links.filter(link => !link.adminOnly) : this.links
    }
  }
}
</script>

<style lang="scss">
.nav-item {
  cursor: pointer;
}
</style>
