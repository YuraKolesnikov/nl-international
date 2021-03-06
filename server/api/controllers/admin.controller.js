const { adminModel } = require('../models/admin.model')
const dateEncoder = require('../../utils/dateEncoder')
const Order = require('../../db/schemas/Order')
const User = require('../../db/schemas/User')

class AdminController {
  constructor(adminModel) {
    this.adminModel = adminModel
  }

  async showAll(req, res, next) {
    const orders = await this.adminModel.showAll()

    try {
      res.render('admin/main', { orders })
    } catch (error) {
      res.json({ error })
    }
  }

  async showAllPrintable(req, res, next) {
    const data = await this.adminModel.showAllPrintable()
    try {
      res.render('admin/main-print', { data })
    } catch (error) {
      res.json({ error })
    }
  }

  async showAllManagers(req, res, next) {
    const users = await this.adminModel.showAllManagers()
    res.render('admin/users', { users })
  }

  async deleteUser(req, res, next) {
    const { id } = req.params
    const user = await this.adminModel.deleteUser(id)
    req.flash('success_msg', 'User deleted')
    res.redirect('/admin/showAllManagers')
    /* res.json({
      user,
      message: "User deleted"
    }) */
  }

  async filterByDate(req, res, next) {
    const filterDate = dateEncoder.encode(req.query.filterDate)
    const orders = await this.adminModel.filterByDate(filterDate)
    res.render('admin/main', { orders })
  }

  async filterByDatePrintable(req, res, next) {
    const filterDate = dateEncoder.encode(req.query.filterDate)
    const data = await this.adminModel.showAllPrintable(filterDate)
    res.render('admin/main-print', { data })
  }
}

module.exports = {
  AdminController,
  adminController: new AdminController(adminModel)
}