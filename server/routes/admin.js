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

router.get('/editUser/:id', (req, res) => {
  res.json({
    managerID: req.user.managerID,
    message: "This feature is coming soon!"
  })
})

router.delete('/deleteUser/:id', (req, res) => {
  res.json({
    message: "Don't touch it, motherfucker!"
  })
})


router.get('/editOrder/:id', ensureAuthenticated, (req, res) => {
  Order.findOne({
    _id: req.params.id
  })
  .then(order => {
    res.render('orders/edit-order', {order})
  })
})

router.delete('/deleteOrder/:id', ensureAuthenticated, (req, res) => {
  Order.remove({ _id: req.params.id })
  .then(() => {
    req.flash('success_msg', 'Order removed')
    res.redirect('/admin/showAll')
  })
})

module.exports = router