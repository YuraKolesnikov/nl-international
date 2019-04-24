const { orderService } = require('../services/order.service')

class OrderController {
  constructor(orderService) {
    this.orderService = orderService
  }

  getAllOrders(req, res, next) {
    this.orderService.getAllOrders()
      .then(orders => res.status(200).json({ orders }))
      .catch(error => res.status(500).json({ error }))
  }

  showAddOrderForm(req, res, next) {
    return res.render('orders/add-order')
  }

  showEditOrderForm(req, res, next) {
    return res.render('orders/edit-order')
  }

  addNewOrder(req, res, next) {
    let errors = [];
    const { orderNumber, orderPrice, orderCity } = req.body

    /* Error handling, move to errorHandler or smth */
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
      return res.render('orders/add-order', {
        errors,
        orderNumber, orderPrice, orderCity
      });
    }

    this.orderService.addNewOrder(orderNumber, orderPrice, orderCity)
      .then(() => {
        req.flash('success_msg', 'Order added')
        res.redirect('/orders')
      })
      .catch(error => res.status(500).json({ error }))
  }

  editOrder(req, res, next) {
    const { id } = req.params;
    const { orderNumber, orderPrice, orderCity } = req.body
    this.orderService.editOrder(id, orderNumber, orderPrice, orderCity)
      .then(order => {
        req.flash('success_msg', `Order Nr. ${order.orderNumber} updated`);
        res.redirect('/orders')
      })
      .catch(error => res.json({ error }))
  }

  deleteOrder(req, res, next) {
    const { id } = req.params
    this.orderService.deleteOrder(id)
      .then(() => {
        req.flash('success_msg', 'Order removed')
        res.redirect('/orders')
      })
      .catch(error => res.json({ error }))
  }
}

module.exports = {
  OrderController,
  orderController: new OrderController(orderService)
}