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
    {
      path: '/users/auth',
      name: 'auth',
      component: () => import(/* webpackChunkName: 'auth' */'./views/Authentication.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import(/* webpackChunkName: 'orders' */'./views/Orders.vue')
    },
    {
      path: '/my-orders',
      name: 'my-orders',
      component: () => import(/* webpackChunkName: 'my-orders' */'./views/MyOrders.vue')
    },
    {
      path: '/orders-printable',
      name: 'orders-printable',
      component: () => import(/* webpackChunkName: 'orders-printable' */'./views/OrdersPrintable.vue')
    },
    {
      path: '/orders/add',
      name: 'addOrder',
      component: () => import(/* webpackChunkName: 'add-order' */'./views/AddOrder.vue')
    },
    {
      path: '/orders/edit/:id',
      name: 'editOrder',
      component: () => import(/* webpackChunkName: 'edit-order' */'./views/EditOrder.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: 'users' */'./views/Users.vue')
    },
    {
      path: '/users/edit/:id',
      name: 'editUser',
      component: () => import(/* webpackChunkName: 'edit-order' */'./views/EditUser.vue')
    }
  ]
})
