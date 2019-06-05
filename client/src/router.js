import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    /* Login/Signup window */
    {
      path: '/user',
      name: 'profile'
    },
    {
      path: '/orders',
      name: 'orders',
      component: Home
    },
    {
      path: '/orders-printable',
      name: 'orders-printable'
    },
    {
      path: '/order/add',
      name: 'addOrder'
    },
    {
      path: '/orders/edit/:id',
      name: 'editOrder',
      component: () => import('./views/EditOrder.vue')
    },
    {
      path: '/users',
      name: 'users'
    },
    {
      path: '/users/edit/:id',
      name: 'editUser'
    }
  ]
})
