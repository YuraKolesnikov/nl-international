/* Dependencies */
const dotenv = require('dotenv').config()
const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const i18n = require('i18n-express')
const path = require('path')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
/* Modules */
const config = require('./config/config')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const mongoose = require('./db/db')
const passportStrategy = require('./auth/passport')
passportStrategy(passport)
/* Setting up application */
const app = express()

/* Middleware */
const publicPath = 'public'

app.use(express.static(publicPath))
app.engine('.hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    inc: (i) => parseInt(i) + 1
  }
}))

app.set('view engine', '.hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cookieParser())
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
  siteLangs: ['ru', 'lv'],
  defaultLang: 'ru',
  textsVarName: 'local',
  cookieLangName: 'ulang'
}));
app.use(methodOverride('_method'))
app.use(session({
  secret: 'Godfather123#@!',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  res.locals.user = req.user || null
  next()
})

/* Router */
app.get('/', (req, res) => res.render('home'))
app.use('/orders', indexRouter)
app.use('/user', userRouter)
app.use('/admin', adminRouter)

/* Port setup */
app.listen(config.port, () => console.log(`App started on ${config.port}`))

const http = require("http")
setInterval(function () {
  http.get("http://nl-delivery.herokuapp.com")
}, 300000) // every 5 minutes