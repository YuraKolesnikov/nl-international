export default {
  headers: {
    users: ['manager.name', 'manager.id', 'actions'],
    orders: ['Nr.', 'order.date', 'order.price', 'order.city', 'actions']
  },
  keys: {
    users: ['fullName', 'managerID'],
    orders: ['number', 'date', 'price', 'city']
  }
}