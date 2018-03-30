import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state = {
  customers: [
    {id: 1, name: 'Achtarudin', numberPhone: '33536'},
    {id: 2, name: 'Achtarudin', numberPhone: '434345'},
    { id: 3, name: 'Achtarudin', numberPhone: '343434' }
  ]
}

var getters = {
  getCustomers: function (state) {
    return state.customers
  }
}

var store = new Vuex.Store({
  state,
  getters
})

export default store
