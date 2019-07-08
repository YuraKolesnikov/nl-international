import userService from '@/services/UserService'

const state = {
	managers: [],
	errors: [],
	token: '',
	mode: 'logIn',
	isLoggedIn: false
}

const getters = {
	getMode: state => state.mode,
	showManagers: state => state.managers,
	getToken: state => state.token,
	getErrors: state => state.errors,
	isLoggedIn: state => state.isLoggedIn
}

const mutations = {
	setMode: (state, newMode) => (state.mode = newMode),
	setToken: (state, token) => state.token = token,
	addError: (state, error) => state.errors.push(error),
	clearErrors: state => state.errors = [],
	logIn: state => state.isLoggedIn = true,
	logOut: state => state.isLoggedIn = false
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
