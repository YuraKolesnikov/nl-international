const { orderModel } = require('../models/OrderModel')

class OrderController {
	constructor(orderModel) {
		this.orderModel = orderModel
	}

  async getOrders(req, res, next) {
    const { managerID } =  req.query
    const orders = await this.orderModel.getOrders(managerID)
    res.status(200).send(orders)
  }

  async addOrder(req, res, next) {
    const { city, price, number, managerID } = req.body

    try {
      await this.orderModel.addOrder({ city, price, number, managerID })
      res.status(201).send('Created new order!')
    } catch (error) {
      return error
    }
  }

  async editOrder(req, res, next) {
	  /* Order id */
	  const { id } = req.params

    const payload = req.body

    try {
      const response = await this.orderModel.editOrder(id, payload)
      res.status(202).send(response)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  async deleteOrder(req, res, next) {
    const { id } = req.params
    /* Not mongoose one, 371-20582968 */
    const { managerID } = req.body

    try {
      await this.orderModel.deleteOrder({ managerID, orderID: id })
      res.status(202).send('Order deleted!')
    } catch (error) {
      res.status(404).send('Order not found!')
    }
  }
}

module.exports = {
  OrderController,
  orderController: new OrderController(orderModel)
}