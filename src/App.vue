<template>
  <div class="container">
    <br>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <add-edit @addCustomer="ADD_CUSTOMER">
        </add-edit>
        <br>
        <tables :customer="COSTUMERS"></tables>
      </div>
    </div>
  </div>
</template>

<script>
import AddEdit from './components/AddEdit'
import Tables from './components/Table'
import { COSTUMERS } from './assets/store/customers'
export default {
  data() {
    return {
      COSTUMERS
    }
  },
  components: {
    AddEdit,
    Tables
  },
  methods: {
    ADD_CUSTOMER(payload) {
      console.log(payload.name)
      console.log(payload.numberPhone)
      console.log(this.COSTUMERS.length)
    }
  }
}
</script>

<style>

</style>
