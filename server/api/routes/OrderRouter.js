const express = require('express')

const { orderController } = require('../controllers/OrderController')
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
    .delete(/* ensureAuthenticated, */ this.orderController.deleteOrder.bind(this.orderController))

    this.router.route('/:number')
    .put(/* ensureAuthenticated, */ this.orderController.editOrder.bind(this.orderController))
  }
}

module.exports = {
  OrderRouter,
  orderRouter: new OrderRouter(express.Router(), orderController).orderRouter
}