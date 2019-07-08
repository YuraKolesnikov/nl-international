const jwt = require('jsonwebtoken')

const encrypt = require('../../utils/encrypt')
const User = require('../../db/schemas/User')
const { mongoConnectionService } = require('../services/mongo.service')

class UserModel {
	constructor(mongoConnectionService) {
		this.mongoConnectionService = mongoConnectionService
	}

	async register({ managerID, fullName, password }) {
		const duplicateUser = await User.findOne({ managerID })

		if (duplicateUser) {
			throw new Error({message: 'Manager ID has been taken'})
		}

		const newUser = new User({ managerID, fullName, password })
		const salt = await encrypt.genSalt(10)
		const hash = await encrypt.genHash(newUser.password, salt)

		newUser.password = hash

		try {
			await newUser.save()
			return newUser
		} catch (error) {
			throw error
		}
	}

	async login({ managerID, password }) {
		try {
      let user = await User.findOne({ managerID })
			const isMatch = await encrypt.compare(password, user.password)

			const token = jwt.sign(
				{
					_id: user._id
				},

				'secret123',
				{
					expiresIn: '1 day'
				}
			)

			if (isMatch) {
				return { user, token }
			}

			throw new Error('Not authorized!')
		} catch (error) {
			return error
		}
	}
}

module.exports = {
  UserModel,
  userModel: new UserModel(mongoConnectionService)
}