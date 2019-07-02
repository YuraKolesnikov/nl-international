const mongoose = require('mongoose')

const Order = require('../../db/schemas/Order')
const User = require('../../db/schemas/User')
const { mongoConnectionService } = require('../services/mongo.service')

class OrderModel {
  constructor(mongoConnectionService) {
    this.mongoConnectionService = mongoConnectionService
  }

  async showOrders(/* managerID */) {
    return await Order.find({ /* managerID */ })
  }

  async getOrder(id) {
    return await Order.findOne(id)
  }

  async redirectToEditOrder(id) {
    return await Order.findById(id)
  }

  async createOrder(data) {
    const { orderNumber, managerID } = data

    const newOrder = new Order(data)
    await newOrder.save()
    const user = await User.findOne({ managerID })
    user.orders.push(orderNumber)
    await user.save()
    
    return newOrder
  }

  async editOrder(id, data) {
    const { orderNumber, orderPrice, orderCity, orderDate } = data
    return await Order.findOneAndUpdate(
      { _id: id },
      { $set: { orderNumber, orderPrice, orderCity, orderDate } },
      { new: false }
    )
  }

  async deleteOrder(id) {
    return await Order.remove({ _id: id })
  }
}

module.exports = {
  OrderModel,
  orderModel: new OrderModel(mongoConnectionService)
}