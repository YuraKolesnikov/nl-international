/* Dependencies */
const http = require("http"),
      path = require('path'),
      cors = require('cors'),
      morgan = require('morgan'),
      express = require('express'),
      i18n = require('i18n-express'),
      passport = require('passport'),
      flash = require('connect-flash'),
      dotenv = require('dotenv').config(),
      hbs = require('express-handlebars'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      cookieParser = require('cookie-parser'),
      methodOverride = require('method-override')








/* Modules */
const config = require('./config/config'),
      passportStrategy = require('./auth/passport')

const { apiRouter } = require('./api/routes/api.router')
passportStrategy(passport)

/* Setting up application */
const app = express()
const server = http.createServer(app)

/* Middleware */
const publicPath = 'public'

app.use(express.static(publicPath))
app.use(morgan('dev'))
app.use(cors())

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
/* app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
  siteLangs: ['ru', 'lv'],
  defaultLang: 'ru',
  textsVarName: 'local',
  cookieLangName: 'ulang'
})); */
app.use(methodOverride('_method'))
app.use(session({
  secret: 'Godfather123#@!',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
/* app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  res.locals.user = req.user || null
  next()
}) */

/* Router */
app.get('/', (req, res) => res.send('YEET! HOME!'))
app.use('/', apiRouter)

/* Port setup */
server.listen(config.port, () => console.log(`App started on ${config.port}`))


/* setInterval(function () {
  http.get("http://nl-delivery.herokuapp.com")
}, 300000) */ // every 5 minutes