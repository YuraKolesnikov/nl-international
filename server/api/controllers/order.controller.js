const Order = require('../../db/schemas/Order')
const User = require('../../db/schemas/User')

const { orderModel } = require('../models/order.model')
const dateEncoder = require('../../utils/dateEncoder')

class OrderController {
  constructor(orderModel) { 
    this.orderModel = orderModel
   }

  async showOrders(req, res, next) {
    const { managerID } = req.user
    try {
      const orders = await this.orderModel.showOrders(managerID)
      res.render('orders/main', { orders })
    } catch (e) {
      res.render('orders/main', { error: 'Internal error! Orders not found!' })
    }
  }

  async redirectToEditOrder(req, res, next) {
    const { id } = req.params
    const order = await this.orderModel.redirectToEditOrder(id)
    
    console.log(order)
    order.orderDate = dateEncoder.decode(order.orderDate)
    console.log(order)
    res.render('orders/edit-order', { order })
  }

  async createOrder(req, res, next) {
    const errors = []
    const { orderNumber, orderPrice, orderCity } = req.body
    const { managerID, fullName } = req.user
    /* TODO: dateCoder */
    let orderDate = dateEncoder.encode(req.body.orderDate)
    if (!orderNumber) {
      errors.push({ text: 'Please add an order number' })
    }

    if (!orderPrice) {
      errors.push({ text: 'Please add an order price' })
    }

    if (!orderCity) {
      errors.push({ text: 'Please add an order city' })
    }

    if (!orderDate) {
      errors.push({ text: 'Please add an order date' })
    }

    if (errors.length > 0) {
      res.render('orders/add-order', { errors })
    } else {
      const data = {
        orderNumber,
        orderPrice,
        orderCity,
        orderDate,
        managerID,
        fullName
      }

      try {
        await this.orderModel.createOrder(data)
        req.flash('success_msg', 'Order added')
        res.redirect('/orders')
      } catch (error) {
        req.flash('error_msg', error.message)
        res.redirect('/orders/add')
      }
    }
  }

  async redirectToCreateOrder(req, res, next) {
    res.render('orders/add-order')
  }

  async editOrder(req, res, next) {
    const errors = []
    const { id } = req.params;
    const { orderNumber, orderPrice, orderCity } = req.body

    /* TODO: Make universal getOrder method in model */
    const order = await Order.findById(id)

    const orderNumberOld = order.orderNumber
    let orderDate = dateEncoder.encode(req.body.orderDate)

    if (!orderNumber) {
      errors.push({ text: 'Please add an order number' })
    }

    if (!orderPrice) {
      errors.push({ text: 'Please add an order price' })
    }

    if (!orderCity) {
      errors.push({ text: 'Please add an order city' })
    }

    if (!orderDate) {
      errors.push({ text: 'Please add an order date' })
    }

    if (errors.length > 0) {
      res.render('orders/edit-order', { errors, order })
    } else {
      const data = {
        orderNumber,
        orderPrice,
        orderCity,
        orderDate
      }

      await this.orderModel.editOrder(id, data)
      req.flash("success_msg", `Order Nr. ${orderNumberOld} updated. New number: ${orderNumber}`);
      res.redirect("/orders")
    }
  }

  async deleteOrder(req, res, next) {
    const { id } = req.params
    try {
      await this.orderModel.deleteOrder(id)
      req.flash('success_msg', 'Order removed')
      res.redirect('/orders')
    } catch (error) {
      req.flash('error_msg', 'Internal error! Order was not deleted')
      res.redirect('/orders')
    }
  }
}


module.exports = {
  OrderController,
  orderController: new OrderController(orderModel)
}