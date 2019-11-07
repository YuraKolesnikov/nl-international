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
    const orders = await Order.find({})
    return orders
  }
  
  async addOrder({ city, price, managerID }) { 
    const newOrder = new Order({
      city,
      price,
      _id: mongoose.Types.ObjectId()
    })

    await User.findOneAndUpdate({ _id: managerID }, { $push: { orders: newOrder._id } })
    /* const user = await User.findById(managerID)
    user.orders.push(newOrder._id) */

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