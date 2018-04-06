/**
 * @description
 * @method addCustomer is communication between component to mutation.js
 * for add new customer
 *
 * @method deleteCustomer is communication between component to mutation.js
 * for delete customer
 *
 * @method editCustomer is communication between component to mutation.js
 * for edit customer
 */
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
