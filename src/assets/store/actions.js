export var actions = {
  addCustomers(context, payload) {
    context.commit('ADD_CUSTOMER', payload)
  },
  deleteCustomer(context, payload) {
    context.commit('DELETE_CUSTOMER', payload)
  },
  editCustomer(context, payload) {
    context.commit('EDIT_CUSTOMER', payload)
  }
}
