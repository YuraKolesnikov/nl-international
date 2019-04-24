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
    .get()

    this.router.route('/add')
    /* Show add window */
    .get()
    /* router.post('/', ensureAuthenticated, (req, res) => {} */
    .post()

    this.router.route('/edit/:id')
    .get()
    /* router.put('/:id', ensureAuthenticated, (req, res) => {} */
    .put()
    /* router.delete('/:id', ensureAuthenticated, (req, res) => {} */
    .delete()

  }
}

module.exports = {
  OrderRouter,
  orderRouter: new OrderRouter(router).orderRouter
}