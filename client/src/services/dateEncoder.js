export const decode = date => date.split('-').join('.')
export const encode = date => date.split('.').join('-')
export const decodeForDisplay = date => date.split('-').reverse().join('.')

