const { adminModel } = require('../models/AdminModel')

class AdminController {
  constructor(adminModel) {
    this.adminModel = adminModel
  }

  async getManagers(req, res, next) {
    try {
      const response = await adminModel.getManagers()
      res.status(200).send(response)
    } catch (error) {
      res.status(400).send(error)
    }
  }
  
  async updateManager(req, res, next) {
    const { managerID, fullName } = req.body

    try {
      return await adminModel.updateManager({ managerID, fullName })
    } catch (error) {
      return error
    }
  }

  async deleteManager(req, res, next) {
    const { managerID } = req.body

    try {
      return await adminModel.deleteManager(managerID)
    } catch (error) {
      return error
    }
  }
}

module.exports = {
  AdminController,
  adminController: new AdminController(adminModel)
}