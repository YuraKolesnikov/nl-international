const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Order = new Schema({
  city: String,
  price: {
    type: Number,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  date: String,
  status: {
    type: Number,
    default: 0
  },
  managerID: mongoose.Schema.Types.ObjectId,
  _id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('orders', Order)