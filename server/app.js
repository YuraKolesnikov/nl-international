/* Dependencies */
const express = require('express')


/* Modules */
const config = require('./config/config')
const indexRouter = require('./routes/index')
/* Setting up application */
const app = express()

/* Middleware */
app.use('/', indexRouter)

/* Port setup */
app.listen(config.port, () => console.log(`App started on ${config.port}`))
