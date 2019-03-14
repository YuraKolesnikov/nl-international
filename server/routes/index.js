const router = require('express').Router()
const Order = require('../models/Order')

router.get('/', (req, res) => res.render('home'))

router.get('/orders', (req, res) => {
  Order.find({})
  .then(orders => {
    res.render('orders/main', {orders})
  })
})

router.get('/orders/add', (req, res) => res.render('orders/add-order'))
router.get('/orders/edit/:id', (req, res) => {
  Order.findOne({
    _id: req.params.id
  })
  .then(order => {
    res.render('orders/edit-order', {order})
  })
  
})
router.post('/orders', (req, res) => {
  let errors = []
  const { city, price, number } = req.body

  if(!price) {
    errors.push({text: 'Please add a price!'})
  }
  if(!number) {
    errors.push({text: 'Please add order number!'})
  }
  
  if(errors.length) {
    res.render('orders/add-order', {
      errors,
      number,
      price,
      city
    })
  } else {
    const newOrder = new Order({
      number,
      price,
      city
    })

    newOrder.save()
    .then(order => {
      req.flash('success_msg', 'Order added')
      res.redirect('/orders')
    })
    .catch(e => res.status(400).send(e))
  }
})

router.put('/orders/:id', (req, res) => {
  const { number, price, city } = req.body
  const { id } = req.params
  Order.findOneAndUpdate({_id: id}, {$set: {number, price, city}})
  .then(order => {
    req.flash('success_msg', 'Order updated')
    res.redirect('/orders')
  })
})

router.delete('/orders/:id', (req, res) => {
  const { id } = req.params
  Order.findByIdAndRemove({_id: id})
  .then(order => {
    req.flash('success_msg', 'Order removed')
    res.redirect('/orders')
  })
})
module.exports = router