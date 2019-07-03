const dateEncoder = {
  decode: date => {
    const [day, month, year] = date.split('.')
    return `${year}-${month}-${day}`
  },
  encode: date => date.split('-').join('.'),
  repair: date => date.split('.').reverse().join('.')
}

module.exports = dateEncoder