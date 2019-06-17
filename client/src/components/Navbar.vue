<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">
      LOGO
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" v-if="x">
       <ul class="navbar-nav">
        <!-- {{#if user}} -->
        <li class="nav-item"><a href="/orders" class="nav-link">{{ local.showOrders }}</a></li>
        <li class="nav-item"><a href="/orders/add" class="nav-link">{{ local.createOrder }}</a></li>
        <li class="nav-item"><a href="/users/logout" class="nav-link">{{ local.logOut }}</a></li>
        <!-- {{else}} -->
        <li class="nav-item"><a class="nav-link" href="/users/login">{{ local.logIn }}</a></li>
        <li class="nav-item"><a class="nav-link" href="/users/signup">{{ local.register }}</a></li>
        <!-- {{/if}} -->
        <!-- {{#if user.admin}} -->
        <li class="nav-item"><a class="nav-link" href="/admin/showAll">Все заказы</a></li>
        <li class="nav-item"><a class="nav-link" href="/admin/showAllPrintable">Все заказы (для печати)</a></li>
        <li class="nav-item"><a class="nav-link" href="/admin/showAllManagers">Все менеджеры</a></li>
        <!-- {{/if}} -->
      </ul>
      
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link class="nav-item" tag="li" v-for="link in links" :key="link.id" :to="link.path">
          <a class="nav-link">{{link.title}}</a>
        </router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        {{currentLocale}}
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
        { id: 2, path: '/orders', title: 'Orders' },
        { id: 10, path: '/orders-printable', title: 'Orders printable' },
        { id: 3, path: '/orders/add', title: 'Add new order' },
        { id: 4, path: '/users/logout', title: 'Logout' },
        { id: 5, path: '/users/auth', title: 'Login/Signup' },
        { id: 6, path: '/users', title: 'Users' },
        { id: 7, path: '/users/edit', title: 'Edit User' }
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