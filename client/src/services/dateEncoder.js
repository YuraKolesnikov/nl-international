export default {
  decode: date => date.split('-').join('.'),
  decodeForDisplay: date => date.split('-').reverse().join('.'),
  encode: date => date.split('.').join('-')
}