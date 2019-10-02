const { orderModel } = require('../models/order.model')

class OrderController {
	constructor(orderModel) {
		this.orderModel = orderModel
	}

  async getOrders(req, res, next) {

  }

  async addOrder(req, res, next) {
    const { city, price, id, managerID } = req.body

    try {
      return await this.orderModel.addOrder({ city, price, id, managerID })
    } catch (error) {
      return error
    }
  }

  async editOrder(req, res, next) {
    try {
      return await this.orderModel.editOrder()
    } catch (error) {
      return error
    }
  }

  async deleteOrder(req, res, next) {
    try {
      return await this.orderModel.deleteOrder()
    } catch (error) {
      
    }
  }
}

module.exports = {
  OrderController,
  orderController: new OrderController(orderModel)
}