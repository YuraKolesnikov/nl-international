const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Order = new Schema({
  city: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  _id: {
    type: mongoose.Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('orders', Order)