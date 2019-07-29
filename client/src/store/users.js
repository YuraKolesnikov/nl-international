import userService from '@/services/UserService'

const state = {
	managers: [],
	alertMessages: [],
	user: {},
	token: '',
	mode: 'logIn',
	isLoggedIn: false
}

const getters = {
	getMode: state => state.mode,
	showManagers: state => state.managers,
	getToken: state => state.token,
	getAlertMessages: state => state.alertMessages,
	isLoggedIn: state => state.isLoggedIn,
	getUser: state => state.user
}

const mutations = {
	setMode: (state, newMode) => (state.mode = newMode),
	setToken: (state, token) => state.token = token,
	addError: (state, error) => state.errors.push(error),
	clearAlertMessages: state => state.alertMessages = [],
	logIn: state => state.isLoggedIn = true,
	logOut: state => state.isLoggedIn = false,
	setUser: (state, user) => state.user = user
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
