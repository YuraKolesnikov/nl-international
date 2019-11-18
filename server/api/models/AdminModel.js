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

  async updateManager({ managerID, fullName }) {
    return await User.findById(id)
  }

  async deleteManager(managerID) {
    return await User.findByIdAndRemove(managerID)
  }
}

module.exports = {
  AdminModel,
  adminModel: new AdminModel(mongoConnectionService)
}