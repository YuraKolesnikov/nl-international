export default {
  headers: {
    users: ['manager.name', 'manager.id', 'actions'],
    orders: ['Nr.', 'order.date', 'order.price', 'order.city', 'order.status', 'actions']
  },
  keys: {
    users: ['fullName', 'managerID'],
    orders: ['number', 'date', 'price', 'city', 'status']
  }
}