const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Order = new Schema({
  orderNumber: String,
  orderPrice: String,
  orderCity: String,
  orderDate: String,
  orderStatus: String,
  user: String,
  fullName: String,
  managerID: String
})

module.exports = mongoose.model('Order', Order)