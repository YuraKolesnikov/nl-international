import userService from '@/services/UserService'

const state = {
	managers: []
}

const getters = {
	showManagers: state => state.managers
}

const mutations = {
  
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
