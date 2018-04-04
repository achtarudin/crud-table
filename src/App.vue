<template>
  <div class="container">
    <br>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <add-edit @addCustomer="ADD_CUSTOMER">
        </add-edit>
        <br>
        <tables :customer="CUSTOMERS"
        @saveCustomer="SAVE_CUSTOMER">
        </tables>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import AddEdit from './components/AddEdit'
import Tables from './components/Table'
import { CUSTOMERS } from './assets/store/customers'
export default {
  data() {
    return {
      CUSTOMERS
    }
  },
  components: {
    AddEdit,
    Tables
  },
  methods: {
    ADD_CUSTOMER(payload) {
      let newCustomer = {
        name: payload.name,
        numberPhone: payload.numberPhone,
        id: this.CUSTOMERS.length + 1
      }
      this.CUSTOMERS.push(newCustomer)
    },
    SAVE_CUSTOMER(payload) {
      console.log(this.CUSTOMERS[payload.id].id)
      var data = {
        id: this.CUSTOMERS[payload.id].id,
        name: payload.name,
        numberPhone: payload.numberPhone
      }
      this.$set(this.CUSTOMERS, payload.id, data)
    }
  }
}
</script>

<style>

</style>
