import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    /* Login/Signup window */
    {
      path: '/users/auth',
      name: 'auth',
      component: () => import('./views/Authentication.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('./views/Orders.vue')
    },
    {
      path: '/orders-printable',
      name: 'orders-printable',
      component: () => import('./views/OrdersPrintable.vue')
    },
    /* POST AXIOS request */
    {
      path: '/orders/add',
      name: 'addOrder',
      component: () => import('./views/AddOrder.vue')
    },
    {
      path: '/orders/edit/:id',
      name: 'editOrder',
      component: () => import('./views/EditOrder.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./views/Users.vue')
    },
    /* POST AXIOS request */
    {
      path: '/users/edit',
      name: 'editUser',
      component: () => import('./views/EditUser.vue')
    },
    {
      path: '/users/logout',
      name: 'logout',
      component: () => import('./views/Logout.vue')
    }
  ]
})
