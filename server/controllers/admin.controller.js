const reverseString = require('../utils/reverseString')
const Order = require('../db/schemas/Order')
const User = require('../db/schemas/User')

class AdminController {
  constructor() {}

  async showAll(req, res, next) {
    const orders = await Order.find({})
    res.render('admin/main', { orders })
  }

  async showAllPrintable(req, res, next) {
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
    res.render('admin/main-print', {
      arrayForTable
    })
  }

  async showAllManagers(req, res, next) {
    const users = await User.find({})
    res.render('admin/users', { users })
  }

  async editUser(req, res, next) {
    /* const {id} = req.params
    const user = await User.findById(id)
    console.log(user) */
    res.json({
      managerID: req.user.managerID,
      message: "This feature is coming soon!"
    })
  }

  async deleteUser(req, res, next) {
    res.json({
      message: "Don't touch it, motherfucker!"
    })
  }

  async filterByDate(req, res, next) {
    const filterDate = reverseString(req.query.filterDate, '-', '.')
    const orders = await Order.find({ orderDate: { $gte: filterDate } })
    res.render('admin/main', { orders })
  }

  async editOrder(req, res, next) {
    const order = await Order.findOne({ _id: req.params.id })
    res.render('orders/edit-order', { order })
  }

  async deleteOrder(req, res, next) {
    await Order.remove({ _id: req.params.id })
    req.flash('success_msg', 'Order removed')
    res.redirect('/admin/showAll')
  }
}

module.exports = {
  AdminController,
  adminController: new AdminController()
}