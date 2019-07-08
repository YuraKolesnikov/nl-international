const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  managerID: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  user: {
    type: String
  },
  admin: {
    type: Boolean,
    default: false
  },
  orders: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('User', User)