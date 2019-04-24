const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const router = express.Router()
const User = require('../../db/schemas/User')

class UserRouter {
  constructor(router) {
    this.router = router
    this.setupRouter()
  }

  get userRouter() {
    return this.router
  }

  setupRouter() {
    this.router.route('/login')
    .get()
    .post()

    this.router.route('/signup')
    .get()
    .post()

    this.router.route('/logout')
    .get()
  }
}

module.exports = {
  UserRouter,
  userRouter: new UserRouter(router).userRouter
}