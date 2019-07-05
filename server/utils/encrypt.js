const bcrypt = require('bcryptjs')

const encrypt = {
	genSalt: key => {
		return new Promise((resolve, reject) => {
			return bcrypt.genSalt(key, (err, salt) => {
				if (err) reject(err)
				resolve(salt)
			})
		})
	},

	genHash: (pass, salt) => {
		return new Promise((resolve, reject) => {
			return bcrypt.hash(pass, salt, (err, hash) => {
				if (err) reject(err)
				resolve(hash)
			})
		})
	},

	compare: (pass, hash) => {
		return new Promise((resolve, reject) => {
			return bcrypt.compare(pass, hash, (err, res) => {
				if (err) reject(err)
				resolve(res)
			})
		})
	}
}

module.exports = encrypt