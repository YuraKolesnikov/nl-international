/* Dependencies */
const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const i18n = require('i18n-express')
const path = require('path')
/* Modules */
const config = require('./config/config')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')

/* Setting up application */
const app = express()

/* Middleware */
const publicPath = 'public'
app.use(express.static(publicPath))
app.engine('.hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
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

app.use('/', indexRouter)
app.use('/user', userRouter)

/* Port setup */
app.listen(config.port, () => console.log(`App started on ${config.port}`))