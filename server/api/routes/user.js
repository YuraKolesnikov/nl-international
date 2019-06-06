const express = require('express')
const { userController } = require('../controllers/user.controller')

class UserRouter {
  constructor(router, userController) {
    this.router = router
    this.userController = userController
    this.setupRouter()
  }

  get userRouter() {
    return this.router
  }

  setupRouter() {
    this.router.route('/login')
    .get(this.userController.redirectToLoginForm.bind(this.userController))
    .post(this.userController.login.bind(this.userController))

    this.router.route('/signup')
    .get(this.userController.redirectToSignupForm.bind(this.userController))
    .post(this.userController.signup.bind(this.userController))

    this.router.route('/logout')
    .get(this.userController.logout.bind(this.userController))
  }
}


module.exports = {
  UserRouter,
  userRouter: new UserRouter(express.Router(), userController).userRouter
}