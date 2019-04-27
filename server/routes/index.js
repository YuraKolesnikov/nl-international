const express = require('express')
const mongoose = require('mongoose')
const orderRouter = express.Router()
const { ensureAuthenticated } = require('../auth/ensureAuth')

const Order = require('../db/schemas/Order')
const User = require('../db/schemas/User')

orderRouter.get('/', ensureAuthenticated, async(req, res) => {
  try {
    const orders = await Order.find({ managerID: req.user.managerID })
    res.render('orders/main', { orders })
  } catch (e) {
    res.render('orders/main', { error: 'Internal error! Orders not found!'})
  }
})

orderRouter.get('/add', ensureAuthenticated, (req, res) => {
  res.render('orders/add-order')
})

orderRouter.get('/edit/:id', ensureAuthenticated, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id })
  if (order.managerID != req.user.managerID) {
    req.flash('error_msg', 'Not Authorized')
    res.redirect('/orders')
  } else {
    res.render('orders/edit-order', {
      order
    })
  }
})

orderRouter.post('/', ensureAuthenticated, async (req, res) => {
  let errors = [];
  const { orderNumber, orderPrice, orderCity } = req.body
  let orderDate = req.body.orderDate.split('-').reverse().join('.')

  if (!orderNumber) {
    errors.push({ text: 'Please add an order number' })
  }
  if (!orderPrice) {
    errors.push({ text: 'Please add an order price' })
  }

  if (!orderCity) {
    errors.push({ text: 'Please add an order city' })
  }
  
  if (errors.length > 0) {
    res.render('orders/add-order', {
      errors,
      orderNumber, orderPrice, orderCity, orderDate
    });
  } 


  const newOrder = new Order({
    orderNumber, orderPrice, orderCity, orderDate,
    userName: req.user.fullName,
    managerID: req.user.managerID
  })

  const user = await User.findOne({managerID: req.user.managerID})

  await user.orders.push(newOrder.orderNumber)
  await user.save()

  await newOrder.save()
  req.flash('success_msg', 'Order added')
  res.redirect('/orders')
});

orderRouter.put('/:id', ensureAuthenticated, async (req, res) => {
  const { id } = req.params;
  const { orderNumber, orderPrice, orderCity} = req.body
  let orderDate = req.body.orderDate.split('-').reverse().join('.')
  await Order.findOneAndUpdate(
    { _id: id},
    { $set: { orderNumber, orderPrice, orderCity, orderDate } },
    { new: true }
  )
  req.flash("success_msg", `Order Nr. ${orderNumber} updated`);
  res.redirect("/orders")
});

orderRouter.delete('/:id', ensureAuthenticated, async (req, res) => {
  try {
    await Order.remove({ _id: req.params.id })
    req.flash('success_msg', 'Order removed')
    res.redirect('/orders')
  } catch (error) {
    req.flash('error_msg', 'Internal error! Order was not deleted')
    res.redirect('/orders')
  }
})

module.exports = orderRouter