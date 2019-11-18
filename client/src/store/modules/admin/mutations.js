export default {
  RECORD_MANAGERS: (state, managers) => state.managers = [...managers],
  RECORD_PRINTABLE: (state, data) => state.data = [...data]
}