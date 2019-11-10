const mongoose = require('mongoose')

const UserModel = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
  /**
   * 0 - user
   * 1 - admin
   * */
  role: {
    type: Number,
    default: 0
  },
  orders: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'orders' }
  ]
})

module.exports = mongoose.model('users', UserModel)