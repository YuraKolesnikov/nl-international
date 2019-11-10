const express = require('express')

const { orderController } = require('../controllers/order.controller')
const { ensureAuthenticated } = require('../../auth/ensureAuth')

class OrderRouter {
  constructor(router, orderController) {
    this.router = router
    this.orderController = orderController
    this.setupRouter()
  }

  get orderRouter() {
    return this.router
  }
  /* TEMPORARILY TURNED OFF AUTH */
  setupRouter() {
    this.router.route('/')
    .get(/* ensureAuthenticated, */ this.orderController.getOrders.bind(this.orderController))
    .post(/* ensureAuthenticated, */ this.orderController.addOrder.bind(this.orderController))

    this.router.route('/:id')
    .put(/* ensureAuthenticated, */ this.orderController.editOrder.bind(this.orderController))
    .delete(/* ensureAuthenticated, */ this.orderController.deleteOrder.bind(this.orderController))
  }
}

module.exports = {
  OrderRouter,
  orderRouter: new OrderRouter(express.Router(), orderController).orderRouter
}