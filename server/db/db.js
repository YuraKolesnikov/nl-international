const mongoose = require('mongoose')
mongoose.Promise = global.Promise

/* mongoose.connect('mongodb://localhost/MongoTut', { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB'))
.catch(e => console.log('Error!', e)) */

module.exports = { mongoose }