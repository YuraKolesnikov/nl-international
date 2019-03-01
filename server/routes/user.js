const router = require('express').Router()

router.get('/login', (req, res) => res.render('user/login'))

router.get('/signup', (req, res) => res.render('user/signup'))

module.exports = router