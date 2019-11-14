const mongoose = require('mongoose'),
      encrypt = require('../../utils/encrypt'),
      User = require('../schemas/UserSchema')

const { mongoConnectionService } = require('../services/mongo.service')

class UserModel {
  constructor(mongoConnectionService) {
    this.mongoConnectionService = mongoConnectionService
  }

  async getUsers() {
    const users = await User
    .find({})
    .populate('orders')
    .select('_id managerID fullName password role')
    return users
  }

  async register({ managerID, fullName, password }) {
    const newUser = new User({
      _id: mongoose.Types.ObjectId(),
      managerID,
      fullName,
      password
    })


    const salt = await encrypt.genSalt(10);
    const hash = await encrypt.genHash(newUser.password, salt);

    newUser.password = hash
    await newUser.save()
  }
}

module.exports = {
  UserModel,
  userModel: new UserModel(mongoConnectionService)
}