const mongoose = require('mongoose')

const Order = require('../../db/schemas/Order')
const User = require('../../db/schemas/User')
const { mongoConnectionService } = require('../services/mongo.service')

class AdminModel {
  constructor(mongoConnectionService, Order, User) {
    this.mongoConnectionService = mongoConnectionService
    this.Order = Order
    this.User = User
  }

  async showAll() {
    return await Order.find({})
  }

  async showAllPrintable() {
    let orders = await Order.find({})
    let users = await User.find({})
    const arrayForTable = []
    users.forEach(user => {
      orders.forEach(order => {
        if (order.managerID === user.managerID) {
          user.orders.push(order)
        }
      })
      if (user.orders.length > 0) {
        arrayForTable.push(user)
      }
    })
    return arrayForTable
  }

  async showAllManagers() {
    return await User.find({})
  }

  async editUser(id) {
    return await User.findById(id)
  }

  async deleteUser(id) {
    return await User.findById(id)
  }

  async filterByDate(filterDate) {
    return await Order.find({ orderDate: { $gte: filterDate } })
  }
}

module.exports = {
  AdminModel,
  adminModel: new AdminModel(mongoConnectionService, Order, User)
}