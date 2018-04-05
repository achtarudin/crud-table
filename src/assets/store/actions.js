export var actions = {
  addCustomers: function(context, payload) {
    context.commit('ADD_CUSTOMER', payload)
  },
  deleteCustomer: function(context, payload) {
    context.commit('DELETE_CUSTOMER', payload)
  }
}
