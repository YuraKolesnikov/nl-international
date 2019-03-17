const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { ensureAuthenticated } = require('../auth/ensureAuth')

const Order = require('../models/Order')

router.get('/', ensureAuthenticated, (req, res) => {
  Order.find({ user: req.user.id })
    .sort({ date: 'desc' })
    .then(orders => {
      res.render('orders/main', {
        orders
      });
    });
});

router.get('/add', ensureAuthenticated, (req, res) => {
  res.render('orders/add-order');
});

router.get('/edit/:id', ensureAuthenticated, (req, res) => {
  Order.findOne({
    _id: req.params.id
  })
    .then(order => {
      if (order.user != req.user.id) {
        req.flash('error_msg', 'Not Authorized');
        res.redirect('/orders');
      } else {
        res.render('orders/edit-order', {
          order
        });
      }
    });
});

router.post('/', ensureAuthenticated, (req, res) => {
  let errors = [];
  console.log(req.body)
  const { orderNumber, orderPrice, orderCity} = req.body
  if (!orderNumber) {
    errors.push({ text: 'Please add an order number' });
  }
  if (!orderPrice) {
    errors.push({ text: 'Please add an order price' });
  }

  if (!orderCity) {
    errors.push({ text: 'Please add an order city' });
  }

  if (errors.length > 0) {
    res.render('orders/add-order', {
      errors,
      orderNumber, orderPrice, orderCity
    });
  } else {
    const newOrder = new Order({
      orderNumber, orderPrice, orderCity,
      user: req.user.id
    })
    newOrder
      .save()
      .then(order => {
        req.flash('success_msg', 'Order added');
        res.redirect('/orders');
      })
  }
});

router.put('/:id', ensureAuthenticated, (req, res) => {
  const { id } = req.params;
  const {orderNumber, orderPrice, orderCity} = req.body
  Order.findOneAndUpdate(
    { _id: id},
    { $set: { orderNumber, orderPrice, orderCity } },
    { new: true }
  )
  .then(order => {
    console.log(order);
    req.flash("success_msg", `Order Nr. ${order.orderNumber} updated`);
    res.redirect("/orders");
  })
  .catch(e => res.send(e));
  /* Order.findOne({
    _id: req.params.id
  })
    .then(order => {
      order.orderNumber = orderNumber;
      order.orderPrice = orderPrice;
      order.orderCity = orderCity
      order.save()
        .then(order => {
          
        })
    }); */
});

router.delete('/:id', ensureAuthenticated, (req, res) => {
  Order.remove({ _id: req.params.id })
    .then(() => {
      req.flash('success_msg', 'Video idea removed');
      res.redirect('/orders');
    });
});

module.exports = router;