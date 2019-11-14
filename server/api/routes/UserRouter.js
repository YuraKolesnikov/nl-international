const express = require('express')
const { userController } = require('../controllers/UserController')

/* const ensureAuth = require('../../auth/ensureAuth') */

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
		.post(this.userController.login.bind(this.userController))

		this.router.route('/register')
		.post(this.userController.register.bind(this.userController))

		this.router.route('/get-users')
		.get(this.userController.getUsers.bind(this.userController))

		/* this.router.route('/logout')
		.get(this.userController.logout.bind(this.userController)) */
	}
}

module.exports = {
	UserRouter,
	userRouter: new UserRouter(express.Router(), userController).userRouter
}
