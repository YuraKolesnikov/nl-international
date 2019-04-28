const Order = require('../db/schemas/Order')
const User = require('../db/schemas/User')

class OrderController {
  constructor() {}

  async showOrders(req, res, next) {
    try {
      const orders = await Order.find({ managerID: req.user.managerID })
      res.render('orders/main', { orders })
    } catch (e) {
      res.render('orders/main', { error: 'Internal error! Orders not found!'})
    }
  }

  async redirectToEditOrder(req, res, next) {
    const {id} = req.params
    const order = await Order.findById(id)

    res.render('orders/edit-order', { order })
  }

  async createOrder(req, res, next) {
    let errors = [];
    const { orderNumber, orderPrice, orderCity } = req.body
    let orderDate = req.body.orderDate.split('-').reverse().join('.')

    if (!orderNumber) {
      errors.push({ text: 'Please add an order number' })
    }
    if (!orderPrice) {
      errors.push({ text: 'Please add an order price' })
    }

    if (!orderCity) {
      errors.push({ text: 'Please add an order city' })
    }
    
    if (errors.length > 0) {
      res.render('orders/add-order', {
        errors,
        orderNumber, orderPrice, orderCity, orderDate
      });
    } 
    const newOrder = new Order({
      orderNumber, orderPrice, orderCity, orderDate,
      userName: req.user.fullName,
      managerID: req.user.managerID
    })

    const user = await User.findOne({managerID: req.user.managerID})

    await user.orders.push(newOrder.orderNumber)
    await user.save()

    await newOrder.save()
    req.flash('success_msg', 'Order added')
    res.redirect('/orders')
  }

  async redirectToCreateOrder(req, res, next) {
    res.render('orders/add-order')
  }

  async editOrder(req, res, next) {
    const { id } = req.params;
    const { orderNumber, orderPrice, orderCity} = req.body
    let orderDate = req.body.orderDate.split('-').reverse().join('.')
    await Order.findOneAndUpdate(
      { _id: id},
      { $set: { orderNumber, orderPrice, orderCity, orderDate } },
      { new: true }
    )
    req.flash("success_msg", `Order Nr. ${orderNumber} updated`);
    res.redirect("/orders")
  }

  async deleteOrder(req, res, next) {
    try {
      await Order.remove({ _id: req.params.id })
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
  orderController: new OrderController()
}