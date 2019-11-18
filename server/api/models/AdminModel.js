const mongoose = require('mongoose')
const User = require('../schemas/UserSchema')
const { mongoConnectionService } = require('../services/mongo.service')

class AdminModel {
  constructor(mongoConnectionService) {
    this.mongoConnectionService = mongoConnectionService
  }

  async getManagers() {
    const users = await User
    .find({})
    .populate('orders')
    .select('_id managerID fullName password role')
    return users
  }

  async getOrdersPrintable(dateFrom) {
    let response
    if (!dateFrom) {
      response = await User
      .find({})
      .populate('orders')
      .select('managerID fullName')
    } else {
      response = await User
      .find({})
      .populate('orders')
      .select('managerID fullName')

      response.forEach(manager => {
        manager.orders = manager.orders.filter(order => order.date >= dateFrom || order.status == 0)
      })
    }
    console.log(response)
    return response
  }

  async updateManager({ managerID, fullName }) {
    console.log({ managerID, fullName })
    await User.findOneAndUpdate(
      { managerID },
      { $set: { ...{ managerID, fullName } } },
      { new: false }
    )
  }

  async deleteManager(managerID) {
    return await User.findByIdAndRemove(managerID)
  }
}

module.exports = {
  AdminModel,
  adminModel: new AdminModel(mongoConnectionService)
}