<template>
    <div>
      <add-customer></add-customer>
      <br>
        <table-customers></table-customers>
    </div>
</template>

<script>
/**
 * @description
 * import component AddCustomer, TableCustomer and
 * setup as component in Pages.vue
 */
import AddCustomer from './AddCustomer'
import TableCustomers from './TableCustomers'

/**
 * @description
 * import store as data, actions, mutations
 */
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
