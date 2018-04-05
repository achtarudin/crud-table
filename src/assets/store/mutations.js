export var mutations = {
  ADD_CUSTOMER: function(state, payload) {
    var newCustomers = {
      id: payload.newId,
      name: payload.name,
      numberPhone: payload.numberPhone
    }
    state.customers.push(newCustomers)
  },
  DELETE_CUSTOMER: function(state, payload) {
    function searchIndex(index) {
      return index.id >= payload
    }
    var index = state.customers.findIndex(searchIndex)
    // Method splice() adds/removes items to/from an array
    // if method splice have three argument can become adds items
    state.customers.splice(index, 1)
  }
}
