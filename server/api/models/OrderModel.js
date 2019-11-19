const mongoose = require('mongoose'),
      Order = require('../schemas/OrderSchema'),
      User = require('../schemas/UserSchema')

const { mongoConnectionService } = require('../services/mongo.service')

class OrderModel {
  constructor(mongoConnectionService) {
    this.mongoConnectionService = mongoConnectionService
  }

  /** 
  * getOrders
  *
  * @param { String } managerID
  */
  async getOrders(managerID) {
    const user = await User.findOne({ managerID })

    let orders
    if (user.role === 1) {
      orders = await Order.find({}).select('city managerID number price status _id date')
    } else {
      orders = await Order.find({ managerID: user._id })
    }
    return orders
  }
  
  /** 
  * addOrder
  *
  * @param { String } city
  * @param { Number } price
  * @param { String } number
  * @param { String } managerID
  * @param { String } date
  */
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

  /** 
  * editOrder
  *
  * @param { String } number
  * @param { Object } payload
  */
  async editOrder(number, payload) {
    await Order.findOneAndUpdate(number, { $set: { ...payload } }, { new: false })
  }

  /** 
  * deleteOrder
  *
  * @param { String } number
  * @param { String } managerID
  */
  async deleteOrder({ number, managerID }) {
    try {
      const order = await Order.findOne({ number })
      await User.findOneAndUpdate(
        { managerID },
        { $pull: { orders: order._id } },
        { safe: true, upsert: true }
      ) 
      await Order.findOneAndRemove({ number })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = {
  OrderModel,
  orderModel: new OrderModel(mongoConnectionService)
}