export default {
  headers: {
    users: ['Имя менеджера', 'ID менеджера', 'Действия'],
    orders: ['Nr.', 'Date', 'Price', 'City', 'Actions']
  },
  keys: {
    users: ['fullName', 'managerID'],
    orders: ['orderNumber', 'orderDate', 'orderPrice', 'orderCity']
  }
}