const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { ensureAuthenticated } = require('../auth/ensureAuth')

const Order = require('../models/Order')
const User = require('../models/User')

router.get('/showAll', ensureAuthenticated, (req, res) => {
  Order.find({})
    .then(orders => {
      res.render('admin/main', {
        orders
      })
    })
})

router.get('/showAllManagers', ensureAuthenticated, (req, res) => {
  User.find({})
    .then(users => {
      res.render('admin/users', {
        users
      })
    })
})

router.get('/edit/:id', (req, res) => {
  res.json({
    managerID: req.user.managerID,
    message: "This feature is coming soon!"
  })
})

module.exports = router