const { orderModel  } = require('../models/order.model')

class OrderService {
  constructor(orderModel) {
    this.orderModel = orderModel
  }

  getAllOrders() {
    return this.orderModel.getAllOrders()
  }

  addNewOrder(orderNumber, orderPrice, orderCity) {
    return this.orderModel.addNewOrder(orderNumber, orderPrice, orderCity)
  }

  /* TODO: Edit to newValues */
  editOrder(id, orderNumber, orderPrice, orderCity) {
    return this.orderModel.editOrder(id, orderNumber, orderPrice, orderCity)
  }

  deleteOrder(id) {
    return this.orderModel.deleteOrder(id)
  }
}

module.exports = {
  OrderService,
  orderService: new OrderService(orderModel)
}