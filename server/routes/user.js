const express = require('express')
const passport = require('passport')
const userRouter = express.Router()

const User = require('../db/schemas/User')
const encrypt = require('../utils/encrypt')
userRouter.get('/login', (req, res) => {
  res.render('user/login')
})

userRouter.get('/signup', (req, res) => {
  res.render('user/signup')
})

userRouter.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'You are logged out')
  res.redirect('/user/login')
})

userRouter.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/orders',
    failureRedirect: '/user/login',
    failureFlash: 'Invalid username or password.'
  })(req, res, next)
})

userRouter.post('/singup', async (req, res) => {
  let errors = []
  const { managerID, fullName, password, password2 } = req.body
  if (password != password2) {
    errors.push({ text: 'Passwords do not match' })
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
    res.redirect('/user/signup')
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
    req.flash('success_msg', 'You are now registered and can log in');
    res.redirect('/user/login')
  } catch (err) {
    console.log(err)
    return
  }
})

module.exports = userRouter