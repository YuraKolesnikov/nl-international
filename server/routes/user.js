const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')

router.get('/login', (req, res) => {
  res.render('user/login');
});

router.get('/signup', (req, res) => {
  res.render('user/signup');
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/orders',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req, res, next);
});

router.post('/singup', (req, res) => {
  let errors = [];
  const {managerID, fullName, password, password2} = req.body
  if (req.body.password != req.body.password2) {
    errors.push({ text: 'Passwords do not match' });
  }

  if (req.body.password.length < 4) {
    errors.push({ text: 'Password must be at least 4 characters' });
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
        req.flash('error_msg', 'Email already regsitered');
        res.redirect('/user/signup');
      } else {
        const newUser = new User({
          managerID,
          fullName,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
            .then(user => {
              req.flash('success_msg', 'You are now registered and can log in');
              res.redirect('/user/login');
            })
            .catch(err => {
              console.log(err);
              return;
            });
          });
        });
      }
    });
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/user/login');
});

router.get('/edit/:id', (req, res) => {
  res.json({
    managerID: req.user.managerID,
    message: "This feature is coming soon!"
  })
})

module.exports = router;