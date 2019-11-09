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
    const { city, price, number } = req.body
    const { managerID } = req.query

    try {
      await this.orderModel.addOrder({ city, price, number, managerID })
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
    const { id } = req.params
    /* Not mongoose one, 371-20582968 */
    const { managerID } = req.body
    console.log(id)
    try {
      await this.orderModel.deleteOrder({ managerID, orderID: id })
      res.status(200).send('Order deleted!')
    } catch (error) {
      res.status(404).send('Order not found!')
    }
  }
}

module.exports = {
  OrderController,
  orderController: new OrderController(orderModel)
}