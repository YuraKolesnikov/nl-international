export default {
  namespaced: true,
  state: {
    alerts: []
  },
  mutations: {
    ADD_ALERT: (state, alert) => state.alerts.unshift(alert),
    REMOVE_ALERT: (state, id) => state.alerts = state.alerts.filter(alert => alert.id !== id),
    CLEAR_ALERTS: state => state.alerts = []
  },
  actions: {
    SHOW_ALERT: ({ commit, state }, { message, status }) => {
      const alert = {
        id: Math.floor(Math.random() * (100000 - 1) + 1),
        message,
        status
      };
      commit('ADD_ALERT', alert);
      setTimeout(() => {
        commit('REMOVE_ALERT', alert.id);
      }, 5800);
    }
  }
};