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
		const { mail, password } = req.body
		try {
			const response = await this.userModel.login({ mail, password })
			console.log('userController response', response)
			res.status(200).send(response)
		} catch (error) {
			res.status(400).send(error)
		}
		/* return await this.userModel.login({ mail, password }) */
		/* passport.authenticate('local', {
			successRedirect: '/orders',
			failureRedirect: '/users/login'
		})(req, res, next) */
	}

	async register(req, res, next) {
		const { mail, password } = req.body
		return await this.userModel.register({ mail, password })
		/* const errors = validator.validateForm({ managerID, fullName, password }) */

		/* if (password != password2) {
			errors.push({ text: 'Passwords do not match!' })
		}

		if (errors.length > 0) {
			res.render('user/signup', {
				errors,
				managerID,
				fullName,
				password
			})
			return
		}

		const user = await User.findOne({ managerID })
		if (user) {
			req.flash('error_msg', 'ID is already registered!')
			res.redirect('/user/signup')
			return
		}

		const newUser = new User({
			managerID,
			fullName,
			password
		})

		const salt = await encrypt.genSalt(10)
		const hash = await encrypt.genHash(newUser.password, salt)

		newUser.password = hash
		await newUser.save()

		try {
			req.flash('success_msg', 'You are now registered and can log in')
			res.redirect('/user/login')
		} catch (err) {
			console.log(err)
			return
		} */
	}

	async postTest(req, res, next) {
		const { id, mail, password } = req.body

		console.log({ id, mail, password })
		res.status(200).send({ id, mail, password })
	}
}

module.exports = {
	UserController,
	userController: new UserController(userModel)
}

