const passport = require('passport'),
      validator = require('../../utils/validator')

const { userModel } = require('../models/user.model')

class UserController {
  constructor(userModel) {
    this.userModel = userModel
  }

  async login(req, res, next) {
    console.log(req.body)
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/users/login',
    })(req, res, next)
  }

  async register(req, res, next) {
    console.log('Hello from UserController!', req.body)
    const { managerID, fullName, password, password2 } = req.body

    if (password != password2) {
      res.status(400).json({ msg: 'Passwords do not match!' })
    } else {
      res.status(200).json({ userData: req.body })
    }
    const result = await this.userModel.register({ managerID, fullName, password })
  }
}

module.exports = {
  UserController,
  userController: new UserController(userModel)
}