const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nl-international'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
.then(() => console.log(mongoose.Collection.users))
.catch(e => console.log('Error!', e))

const User = mongoose.model('User', { name: String })
const john = new User({name: 'John'})
john.save().then(() => console.log('First user saved!'))

const Order = mongoose.model('Order', { id: String, number: String })
const newOrder = new Order({id: '371-20582968', number: '14169543'})
newOrder.save().then(() => console.log('First order saved!'))
module.exports = { mongoose }