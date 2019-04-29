const mongoose = require('mongoose')

const Order = require('../../db/schemas/Order')
const User = require('../../db/schemas/User')
const { mongoConnectionService } = require('../services/mongo.service')

class OrderModel {
  constructor(mongoConnectionService) {
    this.mongoConnectionService = mongoConnectionService
  }

  async showOrders(managerID) {
    return await Order.find({ managerID })
  }

  async redirectToEditOrder(id) {
    return await Order.findById(id)
  }

  async createOrder(data) {
    const { orderNumber, orderPrice, orderCity, orderDate, managerID, fullName } = data

    if (!orderNumber) {
      throw new Error('Please add an order number')
    }

    if (!orderPrice) {
      throw new Error('Please add an order price')
    }

    if (!orderCity) {
      throw new Error('Please add an order city')
    }

    if (!orderDate) {
      throw new Error('Please add the date!')
    }

    const newOrder = new Order(data)
    await newOrder.save()
    const user = await User.findOne({managerID})
    user.orders.push(orderNumber)
    await user.save()
    
    return newOrder
  }
}

module.exports = {
  OrderModel,
  orderModel: new OrderModel(mongoConnectionService)
}