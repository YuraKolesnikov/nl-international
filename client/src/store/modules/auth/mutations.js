export default {
  LOG_IN: state => state.isLoggedIn = true,
  LOG_OUT: state => state.isLoggedIn = false,
  RECORD_USER_ROLE: (state, role) => state.userRole = role
}