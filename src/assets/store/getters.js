export var getters = {
  getCustomers: function(state) {
    return state.customers
  },
  getCountCostumers: function(state) {
    return state.customers.length
  }
}
