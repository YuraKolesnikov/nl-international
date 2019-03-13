const mongoose = require('mongoose')
const config = require('../config/config')
mongoose.Promise = global.Promise
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB'))
.catch(e => console.log('Error!', e))

/* TESTING CONNECTION AND CREATING */
/* const User = mongoose.model('User', { name: String })
const john = new User({name: 'John'})
john.save().then(() => console.log('First user saved!'))

const Order = mongoose.model('Order', { id: String, number: String })
const newOrder = new Order({id: '371-20582968', number: '14169543'})
newOrder.save().then(() => console.log('First order saved!')) */

module.exports = { mongoose }