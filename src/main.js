import Vue from 'vue'
import App from './App'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.config.productionTip = false
Vue.use(VueSweetalert2)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
  // store
})
