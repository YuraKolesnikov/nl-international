const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Order = require('../../db/schemas/Order')
const User = require('../../db/schemas/User')

class OrderRouter {
  constructor(router) {
    this.router = router
    this.setupRouter()
  }

  get orderRouter() {
    return this.router
  }

  setupRouter() {
    this.router.route('/orders')
    /* Show all orders of this manager */
    .get(this.orderController.getAllOrders.bind(this.orderController))

    this.router.route('/add')
    /* Show add window */
    .get(this.orderController.showAddOrderForm.bind(this.orderController))
    /* router.post('/', ensureAuthenticated, (req, res) => {} */
    .post(this.orderController.addNewOrder.bind(this.orderController))

    this.router.route('/edit/:id')
    .get(this.orderController.showEditOrderForm.bind(this.orderController))
    /* router.put('/:id', ensureAuthenticated, (req, res) => {} */
    .put(this.orderController.editOrder.bind(this.orderController))
    /* router.delete('/:id', ensureAuthenticated, (req, res) => {} */
    .delete(this.orderController.deleteOrder.bind(this.orderController))

  }
}

module.exports = {
  OrderRouter,
  orderRouter: new OrderRouter(router).orderRouter
}