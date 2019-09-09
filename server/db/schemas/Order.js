const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Order = new Schema({
  orderNumber: String,
  orderPrice: String,
  orderCity: String,
  orderDate: String,
  orderStatus: {
    type: String,
    default: '0'
  },
  user: String,
  fullName: String,
  managerID: String
})

module.exports = mongoose.model('Order', Order)