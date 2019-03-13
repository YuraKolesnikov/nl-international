const router = require('express').Router()
const User = require('../models/User')

router.get('/login', (req, res) => res.render('user/login'))

router.get('/signup', (req, res) => res.render('user/signup'))

router.post('/registered', (req, res) => {
  const { managerID, fullName, password, password2 } = req.body
  const newUser = new User({
    managerID,
    fullName,
    password
  })

  newUser.save()
  .then(user => user.generateAuthToken())
  .then(token => res.header('x-auth', token).send(user))
  .catch(e => res.status(400).send(e))
})

router.post('/logged-in', (req, res) => {
  console.log(req.body)
})

module.exports = router