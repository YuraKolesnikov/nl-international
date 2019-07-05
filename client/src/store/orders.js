const state = {
  mode: 'a'
}

const getters = {
  getMode: state => state.mode
}

const mutations = {
  setMode: (state, newMode) => state.mode = newMode
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}