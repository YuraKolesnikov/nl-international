const mongoose = require('mongoose')

const Order = require('../../db/schemas/Order')
const User = require('../../db/schemas/User')

const { mongoConnectionService } = require('../services/mongo.service')

class OrderModel {
  constructor(mongoConnectionService, Order) {
    this.mongoConnectionService = mongoConnectionService
    this.Order = Order
  }

  async getAllOrders() {
    const orders = await Order.find()
      .populate('product', 'name price')
      .select('product quantity id')
    return orders
  }

  async addOrder(productId, orderNumber, orderPrice, orderCity) {
    const product = await Product.findById(productId)
    if (product) throw new Error('Product already in database!')

    const order = new Order({
      orderNumber, orderPrice, orderCity
    })

    return order.save()
  }

  async editOrder(productId, newValues) {
    return await Order.findOneAndUpdate({
      _id: productId
    },
    {
      $set: { newValues },
      new: false
    })
  }

  async deleteOrder(orderId) {
    return await Order.findOneAndDelete({ _id: orderId })
  }
}

module.exports = {
  OrderModel,
  orderModel: new OrderModel(mongoConnectionService, Order)
}