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
      orders = await Order.find({}).select('city managerID number price status _id')
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

  async editOrder(number, payload) {
    console.log(`Updating this order: ${number}`)
    console.log('PAYLOAD', payload)
    return await Order.findOneAndUpdate(number, { $set: { ...payload } }, { new: false })
  }

  async deleteOrder({ number, managerID }) {
    try {
      const order = await Order.findOne({ number })
      console.log(order)
      await User.findOneAndUpdate(
        { managerID },
        { $pull: { orders: order._id } },
        { safe: true, upsert: true }
      ) 
      await Order.findOneAndRemove({ number })
    } catch (error) {
      console.log(error)
    }
    /*  */
  }
}

module.exports = {
  OrderModel,
  orderModel: new OrderModel(mongoConnectionService)
}