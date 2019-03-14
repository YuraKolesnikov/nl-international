const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Order = new Schema({
  number: {
    type: String,
    required: true,
    minlength: 6
  },
  price: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Order', Order)