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
  async getUsers({commit, state}) {
		const users = await userService.showManagers()
		state.managers = [...users]
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
