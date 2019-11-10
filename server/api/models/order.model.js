const mongoose = require('mongoose'),
      encrypt = require('../../utils/encrypt'),
      Order = require('../../db/schemas/Order'),
      User = require('../../db/schemas/User')

const { mongoConnectionService } = require('../services/mongo.service')

class OrderModel {
  constructor(mongoConnectionService) {
    this.mongoConnectionService = mongoConnectionService
  }

  async getOrders(managerID) {
    const user = await User.findOne({ managerID })
    console.log(user._id)
    let orders
    if (user.role === 1) {
      orders = await Order.find({})
    } else {
      orders = await Order.find({ managerID: user._id })
    }

    console.log(orders)
    console.log('Hello admin!')
    return orders
  }
  
  async addOrder({ city, price, number, managerID }) {
    const newOrder = new Order({
      city,
      price,
      number,
      status: 0,
      date: '2019-01-01',
      managerID,
      _id: mongoose.Types.ObjectId()
    })

    await User.findOneAndUpdate(
      { _id: managerID },
      { $push: { orders: newOrder._id }},
      { safe: true, upsert: true}
      )

    return await newOrder.save()
  }

  async editOrder() {

  }

  async deleteOrder({ managerID, orderID }) {
    await User.findOneAndUpdate({ managerID }, { $pull: { orders: orderID } })
    const user = await User.findOne({ managerID })
    console.log(user)
    return await Order.findByIdAndRemove(orderID)
  }
}

module.exports = {
  OrderModel,
  orderModel: new OrderModel(mongoConnectionService)
}