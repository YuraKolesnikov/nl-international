const mongoose = require('mongoose')
const encrypt = require('../../utils/encrypt')
const User = require('../../db/schemas/User')
const { mongoConnectionService } = require('../services/mongo.service')

class UserModel {
  constructor(mongoConnectionService) {
    this.mongoConnectionService = mongoConnectionService
  }

  async signup(data) {
    const { managerID, fullName, password, password2 } = data

    if (password != password2) {
      throw new Error('Password do not match!')
    }
    return data
  }
}

module.exports = {
  UserModel,
  userModel: new UserModel(mongoConnectionService)
}