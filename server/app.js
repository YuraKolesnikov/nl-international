/* Dependencies */
const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
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

app.use('/', indexRouter)
app.use('/user', userRouter)

/* Port setup */
app.listen(config.port, () => console.log(`App started on ${config.port}`))