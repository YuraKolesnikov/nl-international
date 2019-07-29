const Order = require('../../db/schemas/Order')
const User = require('../../db/schemas/User')

const { orderModel } = require('../models/order.model')
const dateEncoder = require('../../utils/dateEncoder')
const validator = require('../../utils/validator')

class OrderController {
  constructor(orderModel) { 
    this.orderModel = orderModel
   }

  async showOrders(req, res, next) {
    try {
      const orders = await this.orderModel.showOrders()
      console.log(orders.length)
      res.status(200).json({ orders, message: 'Orders fetched!' })
    } catch (error) {
      res.status(400).send(error)
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
    const { orderNumber, orderPrice, orderCity, managerID, fullName } = req.body
    /* const { managerID, fullName } = req.user */

    let orderDate = dateEncoder.encode(req.body.orderDate)
    const data = {
      orderNumber,
      orderPrice,
      orderCity,
      orderDate,
      managerID,
      fullName
    }
    const errors = validator.validateForm(data)
    
    if (errors.length > 0) {
      console.log(errors)
      return
      /* res.render('orders/add-order', { errors }) */
    } else {
      try {
        await this.orderModel.createOrder(data)
        res.status(200).json({message: 'Order added!'})
        /* req.flash('success_msg', 'Order added')
        res.redirect('/orders') */
      } catch (error) {
        res.status(400).send(error)
        /* req.flash('error_msg', error.message)
        res.redirect('/orders/add') */
      }
    }
  }

  async redirectToCreateOrder(req, res, next) {
    res.render('orders/add-order')
  }

  async editOrder(req, res, next) {
    const { id } = req.params;
    const { orderNumber, orderPrice, orderCity } = req.body
    
    let orderDate = dateEncoder.encode(req.body.orderDate)

    /* TODO: Make universal getOrder method in model */
    const order = await Order.findById(id)
    const orderNumberOld = order.orderNumber


    const data = {
      orderNumber,
      orderPrice,
      orderCity,
      orderDate
    }
    

    const errors = validator.validateForm(data)

    if (errors.length > 0) {
      res.render('orders/edit-order', { errors, order })
    } else {
      await this.orderModel.editOrder(id, data)
      let message = 
      orderNumberOld === orderNumber
      ? `Order Nr. ${orderNumberOld} updated.`
      : `Order Nr. ${orderNumberOld} updated. New number: ${orderNumber}`

      req.flash("success_msg", message);
      res.redirect("/orders")
    }
  }

  async deleteOrder(req, res, next) {
    const { id } = req.params
    try {
      await this.orderModel.deleteOrder(id)
      res.status(200).send()
      /* req.flash('success_msg', 'Order removed')
      res.redirect('/orders') */
    } catch (error) {
      res.status(400).send()
      /* req.flash('error_msg', 'Internal error! Order was not deleted')
      res.redirect('/orders') */
    }
  }
}


module.exports = {
  OrderController,
  orderController: new OrderController(orderModel)
}