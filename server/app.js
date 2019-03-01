/* Dependencies */
const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
/* Modules */
const config = require('./config/config')
const indexRouter = require('./routes/index')


/* Setting up application */
const app = express()

/* Middleware */
app.engine('.hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))

app.set('view engine', '.hbs')


app.use('/', indexRouter)

/* Port setup */
app.listen(config.port, () => console.log(`App started on ${config.port}`))