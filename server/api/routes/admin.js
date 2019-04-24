const express   = require('express')
const mongoose  = require('mongoose')
const router    = express.Router()
const { ensureAuthenticated } = require('../../auth/ensureAuth')

class AdminRouter {
  constructor(router) {
    this.router = router
    this.setupRouter()
  }

  get adminRouter() {
    return this.router
  }

  setupRouter() {
    this.router.route('/showAll')
    .get()

    this.router.route('/showAllManagers')
    .get()

    this.router.route('/editUser/:id')
    .get()

    this.router.route('/deleteUser/:id')
    .delete()

    this.router.route('/editOrder/:id')
    .get()

    this.router.route('/deleteOrder/:id')
    .delete()
  }
}

module.exports = {
  AdminRouter,
  adminRouter: new AdminRouter(router).adminRouter
}