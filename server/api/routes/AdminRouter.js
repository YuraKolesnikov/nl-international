const express = require('express')

const { adminController } = require('../controllers/AdminController')

const { ensureAuthenticated } = require('../../auth/ensureAuth')

class AdminRouter {
  constructor(router, adminController) {
    this.router = router
    this.adminController = adminController
    this.setupRouter()
  }

  get adminRouter() {
    return this.router
  }

  setupRouter() {
    this.router.route('/managers')
    .get(/* ensureAuthenticated, */this.adminController.getManagers.bind(this.adminController))

    this.router.route('/orders-printable')
    .get(this.adminController.getOrdersPrintable.bind(this.adminController))

    this.router.route('/managers/:id')
    .put(/* ensureAuthenticated, */this.adminController.updateManager.bind(this.adminController))
    .delete(/* ensureAuthenticated, */this.adminController.deleteManager.bind(this.adminController))
  }
}

module.exports = {
  AdminRouter,
  adminRouter: new AdminRouter(express.Router(), adminController).adminRouter
}