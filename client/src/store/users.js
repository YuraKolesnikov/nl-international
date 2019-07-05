import userService from '@/services/UserService'

const state = {
	managers: [],
	token: ''
}

const getters = {
	showManagers: state => state.managers,
	getToken: state => state.token
}

const mutations = {
  setToken: (state, token) => state.token = token
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
