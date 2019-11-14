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

  async logout() {
    req.logout()
  }

  async login(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/users/login',
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