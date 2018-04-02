import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state = {
  customers: [
    {
      id: 1,
      name: 'achtarudin',
      numberPhone: '33536'
    },
    {
      id: 2,
      name: 'handsome',
      numberPhone: '434345'
    },
    {
      id: 3,
      name: 'people',
      numberPhone: '343434'
    }
  ]
}

var getters = {
  getCustomers: function(state) {
    return state.customers
  },
  getCountCostumers: function(state) {
    return state.customers.length
  }
}

var mutations = {
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

var actions = {
  addCustomers: function(context, payload) {
    context.commit('ADD_CUSTOMER', payload)
  },
  deleteCustomer: function(context, payload) {
    context.commit('DELETE_CUSTOMER', payload)
  }
}
var store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
