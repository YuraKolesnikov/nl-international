const { adminModel } = require('../models/AdminModel')

class AdminController {
  constructor(adminModel) {
    this.adminModel = adminModel
  }

  /** 
  * getManagers
  *
  * @response { Array } / [{ fullName: String, managerID: String, role: Number }]
  */
  async getManagers(req, res, next) {
    try {
      const response = await adminModel.getManagers()
      res.status(200).send(response)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  /** 
  * getOrdersPrintable
  *
  * @response { Array } / [
  *   { 
  *     fullName: String, 
  *     managerID: String, 
  *     orders: [
  *       { city: String, date: String, managerID: mongoose.Types.ObjectId, number: String, price: Number }
  *     ] 
  *   }
  * ]
  */
  async getOrdersPrintable(req, res, next) {
    const { dateFrom } = req.query
    try {
      const response = await adminModel.getOrdersPrintable(dateFrom)
      res.status(200).send(response)
    } catch(e) {
      res.status(400).send(e)
    }
  }
  
  /** 
  * updateManager
  *
  * @response
  */
  async updateManager(req, res, next) {
    const { managerID, fullName } = req.body
    try {
      const response = await adminModel.updateManager({ managerID, fullName })
      res.status(200).send(response)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  /** 
  * deleteManager
  *
  * @response
  */
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