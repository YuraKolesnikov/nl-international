const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 5
  },
  managerID: {
    type: String,
    required: true,
    trim: true,
    unique: true
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
  }
})

module.exports = mongoose.model('User', User)