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

  setupRouter() {
    this.router.route('/')
    .get(ensureAuthenticated, this.orderController.showOrders.bind(this.orderController))
    .post(ensureAuthenticated, this.orderController.createOrder.bind(this.orderController))

    this.router.route('/add')
    .get(ensureAuthenticated, this.orderController.redirectToCreateOrder.bind(this.orderController))

    this.router.route('/edit/:id')
    .get(ensureAuthenticated, this.orderController.redirectToEditOrder.bind(this.orderController))

    this.router.route('/:id')
    .put(ensureAuthenticated, this.orderController.editOrder.bind(this.orderController))
    .delete(ensureAuthenticated, this.orderController.deleteOrder.bind(this.orderController))
  }
}

module.exports = {
  OrderRouter,
  orderRouter: new OrderRouter(express.Router(), orderController).orderRouter
}