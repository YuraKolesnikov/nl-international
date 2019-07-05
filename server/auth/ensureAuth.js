const jwt = require('jsonwebtoken')
const User = require('../db/schemas/User')

const auth = async (req, res, next) => {
	try {
		const token = req.header('Authorization').replace('bearer ', '')
		console.log('ensureAuth, TOKEN ', token)
		const decoded = jwt.verify(token, 'secret123')
		console.log('ensureAuth, ID ', decoded._id)
		const user = await User.findById({ _id: decoded._id })
		console.log('ensureAuth, USER ', user)
		if (!user) {
			throw new Error('Not authorized!')
		}

		req.user = user
		next()
	} catch (error) {
		res.status(401).send({ error })
	}
}

module.exports = auth
