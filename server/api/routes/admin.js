const express = require('express')

const { adminController } = require('../controllers/admin.controller')
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
    this.router.route('/showAll')
    .get(ensureAuthenticated, this.adminController.showAll.bind(this.adminController))

    this.router.route('/showAllPrintable')
    .get(ensureAuthenticated, this.adminController.showAllPrintable.bind(this.adminController))

    this.router.route('/showAllManagers')
    .get(ensureAuthenticated, this.adminController.showAllManagers.bind(this.adminController))

    this.router.route('/deleteUser/:id')
    .delete(ensureAuthenticated, this.adminController.deleteUser.bind(this.adminController))

    this.router.route('/filterByDate')
    .get(ensureAuthenticated, this.adminController.filterByDate.bind(this.adminController))

    this.router.route('/filterByDatePrintable')
    .get(ensureAuthenticated, this.adminController.filterByDatePrintable.bind(this.adminController))
  }
}

module.exports = {
  AdminRouter,
  adminRouter: new AdminRouter(express.Router(), adminController).adminRouter
}

