/**
 * @description
 * @method getters.getCustomer setup data or state from store.js
 *
 * @method getters.getCountCostumer for tell count of data
 */
export var getters = {
  getCustomers: function(state) {
    return state.customers
  },
  getCountCostumers: function(state) {
    return state.customers.length
  }
}
