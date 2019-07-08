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
        class="navbar-nav"
        v-if="isLoggedIn == false">
        <router-link
          class="nav-item"
          tag="li"
          to="/users/auth">
          {{ $t('account') }}
        </router-link>
      </ul>
      <ul 
        class="navbar-nav"
        v-else>
        <router-link
          class="nav-item"
          tag="li"
          v-for="link in filteredLinks"
          :key=" link.id"
          :to="link.path">
          <a class="nav-link">
            {{ $t(link.title) }}
          </a>
        </router-link>
        <router-link 
          class="nav-item" 
          tag="li" 
          to="/" 
          @click.native="logOut">
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
  props: ['test'],
  data() {
    return {
      x: this.$props.test,
      links: [
        { id: 1, path: '/my-orders', title: 'showOrders', adminOnly: false },
        { id: 2, path: '/orders/add', title: 'createOrder', adminOnly: false },
        { id: 3, path: '/orders-printable', title: 'allOrdersPrintable', adminOnly: true },
        { id: 4, path: '/users', title: 'managers', adminOnly: true }
      ]
    }
  },
  methods: {
    changeLocale({target}) {
      this.$i18n.locale = target.id
    },

    logOut() {
      this.$store.commit('logOut')
      this.$store.commit('addError', {
        type: 'success',
        message:'Logged out!'
      })
      this.$router.push({ path: '/' })
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale
    },

    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },

    isUserAdmin() {
      return this.$store.getters.getUser.admin
    },

    filteredLinks() {
      return this.isUserAdmin
      ? this.links
      : this.links.filter(link => link.adminOnly === false)
    }
  }
}
</script>
<style lang="scss">
.nav-item {
  cursor: pointer;
}
</style>
