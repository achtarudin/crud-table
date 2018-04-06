/**
 * @description
 * set mutation from vuex @see www.vue/vuex.org
 *
 * @method ADD_CUSTUMER for adding new customer,
 * must with 2 @argument
 * 1, state from store.js,
 * 2. payload for data from actions.js file
 *
 * @method DELETE_CUSTOMER for delete customer with id,
 * must with 2 @argument
 * 1, state from store.js,
 * 2. payload for data from actions.js file
 *
 * @method EDIT_CUSTOMER for edit custumer with id,
 * must with 2 @argument
 * 1, state from store.js,
 * 2. payload for data from actions.js file
 */
export var mutations = {
  ADD_CUSTOMER(state, payload) {
    var newCustomers = {
      id: payload.newId,
      name: payload.name,
      numberPhone: payload.numberPhone
    }
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
