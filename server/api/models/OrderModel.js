const mongoose = require('mongoose'),
      encrypt = require('../../utils/encrypt'),
      Order = require('../schemas/OrderSchema'),
      User = require('../schemas/UserSchema')

const { mongoConnectionService } = require('../services/mongo.service')

class OrderModel {
  constructor(mongoConnectionService) {
    this.mongoConnectionService = mongoConnectionService
  }

  async getOrders(managerID) {
    const user = await User.findOne({ managerID })

    let orders
    if (user.role === 1) {
      orders = await Order.find({})
    } else {
      orders = await Order.find({ managerID: user._id })
    }
    return orders
  }
  
  async addOrder({ city, price, number, managerID, date }) {
    const user = await User.findOne({ managerID })

    const newOrder = new Order({
      city,
      price,
      number,
      status: 0,
      date,
      managerID: user._id,
      _id: mongoose.Types.ObjectId()
    })

    await User.findOneAndUpdate(
      managerID,
      { $push: { orders: newOrder._id }},
      { safe: true, upsert: true}
      )

    return await newOrder.save()
  }

  async editOrder(_id, payload) {
    console.log(`Updating this order: ${_id}`)
    console.log('PAYLOAD', payload)
    return await Order.findOneAndUpdate(_id, { $set: { ...payload } }, { new: false })
  }

  async deleteOrder({ managerID, orderID }) {
    await User.findOneAndUpdate(
      managerID,
      { $pull: { orders: orderID } },
      { safe: true, upsert: true }
      )

    const user = await User.findOne({ managerID })
    await Order.findByIdAndRemove(orderID)
  }
}

module.exports = {
  OrderModel,
  orderModel: new OrderModel(mongoConnectionService)
}