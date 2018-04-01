import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state = {
  customers: [
    {
      id: 1,
      name: 'Achtarudin',
      numberPhone: '33536'
    },
    {
      id: 2,
      name: 'Achtarudin',
      numberPhone: '434345'
    },
    {
      id: 3,
      name: 'Achtarudin',
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
  ADD_CUSTOMERS: function(state, payload) {
    var newCustomers = {
      id: payload.newId,
      name: payload.name,
      numberPhone: payload.numberPhone
    }
    console.log(payload)
    state.customers.push(newCustomers)
    console.log(state.customers)
  }
}

var actions = {
  addCustomers: function(context, payload) {
    context.commit('ADD_CUSTOMERS', payload, 'tess')
  }
}
var store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
console.log(store)
export default store
