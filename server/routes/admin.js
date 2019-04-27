const express = require('express')
const mongoose = require('mongoose')
const adminRouter = express.Router()

const { ensureAuthenticated } = require('../auth/ensureAuth')
const reverseString = require('../utils/reverseString')
const Order = require('../db/schemas/Order')
const User = require('../db/schemas/User')

adminRouter.get('/showAll', ensureAuthenticated, async (req, res) => {
  const orders = await Order.find({})
  res.render('admin/main', { orders })
})

adminRouter.get('/showAllPrintable', ensureAuthenticated, async (req, res, next) => {
  let orders = await Order.find({})
  console.log(orders)
  let users = await User.find({})
  users.forEach(user => {
    orders.forEach(order => {
      console.log(order.managerID)
      console.log(user.managerID)
      console.log(user.orders)
      console.log(order.managerID === user.managerID)
    })
  })
  next()
  /* const arrayForTable = []
  users.forEach(user => {
    orders.forEach(order => {
      if (order.managerID === user.managerID) {
        user.orders.push(order)
      }
    })
    if (user.orders.length > 0) {
      arrayForTable.push(user)
    }
  })
  res.render('admin/main-print', {
    arrayForTable
  }) */
})

adminRouter.get('/showAllManagers', ensureAuthenticated, async (req, res) => {
  const users = await User.find({})
  res.render('admin/users', { users })
})

adminRouter.get('/editUser/:id', (req, res) => {
  res.json({
    managerID: req.user.managerID,
    message: "This feature is coming soon!"
  })
})

adminRouter.get('/filterByDate', ensureAuthenticated, async (req, res) => {
  const filterDate = reverseString(req.query.filterDate, '-', '.')
  const orders = await Order.find({ orderDate: { $gte: filterDate } })
  res.render('admin/main', { orders })
})

adminRouter.get('/editOrder/:id', ensureAuthenticated, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id })
  res.render('orders/edit-order', { order })
})

adminRouter.delete('/deleteOrder/:id', ensureAuthenticated, async (req, res) => {
  await Order.remove({ _id: req.params.id })
  req.flash('success_msg', 'Order removed')
  res.redirect('/admin/showAll')
})

adminRouter.delete('/deleteUser/:id', (req, res) => {
  res.json({
    message: "Don't touch it, motherfucker!"
  })
})


module.exports = adminRouter