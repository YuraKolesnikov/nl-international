export default {
  LOG_IN: state => state.isLoggedIn = true,
  LOG_OUT: state => state.isLoggedIn = false,
  RECORD_USER_ROLE: (state, role) => state.userRole = role,
  RECORD_USER_ID: (state, managerID) => state.managerID = managerID
}