export default {
  decode: date => date.split('-').reverse().join('.'),
  decodeForDisplay: date => date.split('-').reverse().join('.'),
  encode: date => {
    const [day, month, year] = date.split('.')
    return `${year}-${month}-${day}`
  }
}