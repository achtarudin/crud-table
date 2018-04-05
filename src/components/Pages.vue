<template>
    <div>
      <add-customer></add-customer>
      <br>
        <table-customers></table-customers>
    </div>
</template>

<script>
import AddCustomer from './AddCustomer'
import TableCustomers from './TableCustomers'
import store from '../assets/store/store'

export default {
  components: {
    AddCustomer,
    TableCustomers
  },
  store: store
}
</script>

<style>
</style>
