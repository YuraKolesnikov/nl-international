export default {
  MANAGER: state => managerID => {
    const result = state.managers.find(manager => manager.managerID == managerID)
    const user = {
      managerID: result.managerID,
      fullName: result.fullName
    }
    return user
  }
}