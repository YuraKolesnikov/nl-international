const router = require('express').Router()

router.get('/login', (req, res) => res.render('user/login'))

router.get('/signup', (req, res) => res.render('user/signup'))

router.post('/registered', (req, res) => {
  res.send(req.body)
})

router.post('/logged-in', (req, res) => {
  res.send(req.body)
})

module.exports = router