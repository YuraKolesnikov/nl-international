const { orderModel } = require('../models/order.model')

class OrderController {
	constructor(orderModel) {
		this.orderModel = orderModel
	}

  async getOrders(req, res, next) {
    const managerID = /* req.query */'123'
    console.log(managerID)
    const orders = await this.orderModel.getOrders(managerID)
    res.status(200).send(orders)
  }

  async addOrder(req, res, next) {
    const { city, price } = req.body
    const { managerID } = req.query

    try {
      await this.orderModel.addOrder({ city, price, managerID })
      res.status(201).send('Created new order!')
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