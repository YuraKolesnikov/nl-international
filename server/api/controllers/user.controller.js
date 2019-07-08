const validator = require('../../utils/validator')

const jwt = require('jsonwebtoken')

const { userModel } = require('../models/user.model')

class UserController {
	constructor(userModel) {
		this.userModel = userModel
	}

	async logout(req, res, next) {
		req.logout()
		req.flash('success_msg', 'You are logged out')
		res.redirect('/users/login')
	}

	async login(req, res, next) {
		const { managerID, password } = req.body

		try {
			const response = await this.userModel.login({ managerID, password })
			res.status(200).send(response)
		} catch (error) {
			res.status(400).send(error)
		}
	}

	async register(req, res, next) {
		const { managerID, fullName, password } = req.body
		try {
			const response = await this.userModel.register({ managerID, fullName, password })
			res.status(201).send(response)
		} catch (error) {
			res.json({ 
				status: 400,
				statusText: 'ManagerID has been taken!'
			})
		}
	}
}

module.exports = {
	UserController,
	userController: new UserController(userModel)
}

