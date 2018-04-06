export var mutations = {
  ADD_CUSTOMER(state, payload) {
    var newCustomers = {
      id: payload.newId,
      name: payload.name,
      numberPhone: payload.numberPhone
    }
    console.log(newCustomers.id)
    state.customers.push(newCustomers)
  },
  DELETE_CUSTOMER(state, payload) {
    state.customers.splice(payload, 1)
  },
  EDIT_CUSTOMER(state, payload) {
    var id = payload.id - 1
    state.customers.splice(id, 1, payload)
  }
}
