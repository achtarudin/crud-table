<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr class="text-center">
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Number Phone</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="customer in custumers" :key="customer.id">
          <td class="text-center">{{customer.id}}</td>
          <td class="text-center">{{capitalize(customer.name)}}</td>
          <td class="text-center">{{customer.numberPhone}}</td>
          <td class="text-center">
            <button type="button"
            class="btn btn-outline-primary btn-sm"
            @click="editCustomer"
            :value="customer.id">
            edit</button>
          </td>
          <td class="text-center">
            <button type="button"
            class="btn btn-outline-danger btn-sm"
            @click="deleteCustomer"
            :value="customer.id">
            delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    custumers: function() {
      var getCustomers = this.$store.getters.getCustomers
      return getCustomers
    }
  },
  methods: {
    editCustomer: function(e) {
      var id = e.target.value
      console.log(id)
    },
    // method delete costumer mutation
    deleteCustomer: function(e) {
      var id = e.target.value
      this.$store.dispatch('deleteCustomer', id)
    },
    // methods for capital word
    capitalize(name) {
      var capitalize = name.replace(/\b\w/g, l => l.toUpperCase())
      return capitalize
    }
  }
}
</script>

<style>
</style>
