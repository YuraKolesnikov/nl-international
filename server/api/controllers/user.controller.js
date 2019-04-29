const passport = require('passport')

const encrypt = require('../../utils/encrypt')

const { userModel } = require('../models/user.model')

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
      failureFlash: 'Invalid username or password.'
    })(req, res, next)
  }

  async signup(req, res, next) {
  let errors = []
  const {managerID, fullName, password, password2} = req.body
  if (req.body.password != req.body.password2) {
    errors.push({ text: 'Passwords do not match' })
  }

  if (req.body.password.length < 4) {
    errors.push({ text: 'Password must be at least 4 characters' })
  }

  if (errors.length > 0) {
    res.render('user/signup', {
      errors,
      managerID,
      fullName,
      password
    });
  } else {
    User.findOne({managerID})
    .then(user => {
      if (user) {
        req.flash('error_msg', 'Email already regsitered')
        res.redirect('/user/signup')
      } else {
        const newUser = new User({
          managerID,
          fullName,
          password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save()
            .then(user => {
              req.flash('success_msg', 'You are now registered and can log in');
              res.redirect('/user/login')
            })
            .catch(err => {
              console.log(err)
              return
            })
          })
        })
      }
    })
  }
  }

  async test(req, res, next) {
    const { name } = req.body
    res.json({name})
  }
}

module.exports = {
  UserController,
  userController: new UserController(userModel)
}