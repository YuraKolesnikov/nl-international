const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Order = new Schema({
  number: String,
  price: String,
  city: String
})

module.exports = mongoose.model('Order', Order)