const passport = require('passport'),
      validator = require('../../utils/validator')

const { userModel } = require('../models/UserModel')

class UserController {
  constructor(userModel) {
    this.userModel = userModel
  }

  async getUsers(req, res, next) {
    const users = await this.userModel.getUsers()
    res.status(200).send(users)
  }

  async logout(req, res, next) {
    console.log('Logging out from server')
    req.logout()
    res.status(200).json({ msg: 'Logged out' })
  }

  async login(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
      if (!user) { return res.status(404).json({ msg: 'User not found!' }) }
      req.logIn(user, err => {
        if (err) { return res.status(403).json({ msg: 'Not authorized' }) }
        return res.status(201).json({ msg: 'Authorized', user })
      })
    })(req, res, next)
  }

  async register(req, res, next) {
    const { managerID, fullName, password, password2 } = req.body

    try {
      await this.userModel.register({ managerID, fullName, password })
      res.status(201).send('Registered successfully')
    } catch(e) {
      res.status(400).send(e)
    }
  }
}

module.exports = {
  UserController,
  userController: new UserController(userModel)
}