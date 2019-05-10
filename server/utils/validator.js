const validator = {
  validateOrder: function (order) {
    const result = []
    Object.keys(order).forEach(key => {

      if (!order[key]) result.push({ text: `Missing ${this.editCamelCaseKey(key)}!` })

    })
    return result
  },
  editCamelCaseKey: function (key) {
    let [first, second] = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ')
    first = first.charAt(0).toUpperCase() + first.slice(1)
    return `${first} ${second}`
  }
}

module.exports = validator