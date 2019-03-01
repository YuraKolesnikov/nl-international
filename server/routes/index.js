const router = require('express').Router()

router.get('/', (req, res) => res.render('home'))

router.get('/orders', (req, res) => res.render('orders/main'))

router.get('/orders/submit', (req, res) => res.render('orders/submit-order'))
module.exports = router