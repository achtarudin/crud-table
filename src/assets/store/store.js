import Vue from 'vue'
import Vuex from 'vuex'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
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

var store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
