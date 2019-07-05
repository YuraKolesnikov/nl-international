const mongoose = require('mongoose')

const Order = require('../../db/schemas/Order')
const User = require('../../db/schemas/User')
const { mongoConnectionService } = require('../services/mongo.service')

class AdminModel {
	constructor(mongoConnectionService) {
		this.mongoConnectionService = mongoConnectionService
	}

	async showAll() {
		return await Order.find({})
	}

	async showAllPrintable(/* filterDate = undefined */) {
		let orders = await Order.find({})
    let users = await User.find({})
    
		const arrayForTable = []
		users.forEach(user => {
			user.orders = []
			orders.forEach(order => {
				if (
					order.managerID === user.managerID /*  &&
						order.orderDate >= filterDate */) {
					user.orders.push({
						orderNumber: order.orderNumber,
						orderDate: order.orderDate
					})
				}
			})
			if (user.orders.length > 0) {
				arrayForTable.push(user)
			}
		})
		return arrayForTable
	}

	async showAllManagers() {
		return await User.find({}).select('mail')
	}

	async editUser(id) {
		return await User.findById(id)
	}

	async deleteUser(id) {
		return await User.findById(id)
	}

	async filterByDate(filterDate) {
		return await Order.find({ orderDate: { $gte: filterDate } })
	}
}

module.exports = {
	AdminModel,
	adminModel: new AdminModel(mongoConnectionService)
}
