const mongoose = require('mongoose')
const User = require('../schemas/UserSchema')
const { mongoConnectionService } = require('../services/mongo.service')

class AdminModel {
  constructor(mongoConnectionService) {
    this.mongoConnectionService = mongoConnectionService
  }

  /** 
  * getManagers
  *
  * @returns { Array } users / array of users for Users view
  */
  async getManagers() {
    const users = await User
    .find({})
    .select('managerID fullName role')
    return users
  }

  /** 
  * getOrdersPrintable
  *
  * @param { String } dateFrom
  *
  * @returns { Array } / array of users populated with orders trough relations between Users and Orders collections
  */
  async getOrdersPrintable(dateFrom) {
    let response
    if (!dateFrom) {
      response = await User
      .find({})
      .populate('orders', 'city date number status price')
      .select('managerID fullName')
    } else {
      response = await User
      .find({})
      .populate('orders')
      .select('managerID fullName')

      response
      .forEach(manager => {
        manager.orders = manager.orders.filter(order => order.date >= dateFrom || order.status == 0)
      })
    }
    response = response.filter(manager => manager.orders.length > 0)
    return response
  }

  /** 
  * updateManager
  *
  * @param { String } managerID
  * @param { String } fullName
  */
  async updateManager({ managerID, fullName }) {
    await User.findOneAndUpdate(
      { managerID },
      { $set: { ...{ managerID, fullName } } },
      { new: false }
    )
  }

  /** 
  * deleteManager
  *
  * @param { String } managerID
  */
  async deleteManager(managerID) {
    await User.findByIdAndRemove(managerID)
  }
}

module.exports = {
  AdminModel,
  adminModel: new AdminModel(mongoConnectionService)
}