const passport = require('passport')

const encrypt = require('../../utils/encrypt')

const User = require('../../db/schemas/User')
const { userModel } = require('../models/user.model')
const validator = require('../../utils/validator')

class UserController {
  constructor(userModel) {
    this.userModel = userModel
  }

  redirectToLoginForm(req, res, next) {
    res.render('user/login')
  }

  redirectToSignupForm(req, res, next) {
    res.render('user/signup')
  }

  async logout(req, res, next) {
    req.logout()
    req.flash('success_msg', 'You are logged out')
    res.redirect('/users/login')
  }

  async login(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/orders',
      failureRedirect: '/users/login',
    })(req, res, next)
    console.log('Logged in!')
  }

  async signup(req, res, next) {
    const { managerID, fullName, password, password2 } = req.body

    const errors = validator.validateForm({managerID, fullName, password})

    if (password != password2) {
      errors.push({ text: 'Passwords do not match!' })
    }
  
    if (errors.length > 0) {
      res.render('user/signup', {
        errors,
        managerID,
        fullName,
        password
      });
      return;
    }
  
    const user = await User.findOne({ managerID })
    if (user) {
      req.flash('error_msg', 'ID is already registered!')
      console.log('Success!')
      res.redirect('/users/signup')
      return;
    }
  
    const newUser = new User({
      managerID,
      fullName,
      password
    })
  
    const salt = await encrypt.genSalt(10);
    const hash = await encrypt.genHash(newUser.password, salt);
  
    newUser.password = hash
    await newUser.save()
  
    try {
      req.flash('success_msg', 'You are now registered and can log in')
      res.redirect('/users/login')
    } catch (err) {
      console.log(err)
      return
    }
  }
}

module.exports = {
  UserController,
  userController: new UserController(userModel)
}