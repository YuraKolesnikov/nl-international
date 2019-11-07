const mongoose = require('mongoose')
const User = require('../../db/schemas/User')
const { mongoConnectionService } = require('../services/mongo.service')

class AdminModel {
  constructor(mongoConnectionService) {
    this.mongoConnectionService = mongoConnectionService
  }
  
  async getManagers() {
    return await User.find({})
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