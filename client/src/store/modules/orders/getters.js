export default {
  GET_ORDER: state => orderNumber => {
    return state.orders.find(order => order.number == orderNumber) 
  }
}