const router = require('express').Router()
const db = require('../db/db')
router.get('/', (req, res) => res.redirect())

router.get('/orders', (req, res) => res.render('orders/main'))

router.get('/orders/add', (req, res) => res.render('orders/submit-order'))

router.post('/orders/submit', (req, res) => {
  const {city, price, number} = req.body
  res.send({order: {
    city,
    price,
    number
  }})

})
module.exports = router