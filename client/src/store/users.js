import userService from '@/services/UserService'

const state = {
	managers: [],
	errors: [],
	token: ''
}

const getters = {
	showManagers: state => state.managers,
	getToken: state => state.token,
	getErrors: state => state.errors
}

const mutations = {
	setToken: (state, token) => state.token = token,
	addError: (state, error) => state.errors.push(error),
	clearErrors: state => state.errors = []
}

const actions = {
  async getUsers(state) {
		state.managers = await userService.showManagers()
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
