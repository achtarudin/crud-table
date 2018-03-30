<template>
<div class="card card-body border border-primary">
  <table class="table table-striped table-hover">
    <thead class="">
      <tr class="text-center">
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Number Phone</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in customers"
      :key="customer.id"
      class="text-center">
        <th>{{customer.id}}</th>
        <th>{{customer.name}}</th>
        <th>{{customer.numberPhone}}</th>
        <th><button class="btn btn-outline-info btn-sm">Edit</button></th>
        <th><button class="btn btn-outline-danger btn-sm">Delete</button></th>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  computed: {
    customers: function () {
      let customers = this.$store.getters.getCustomers
      return customers
    }
  }
}
</script>

<style>

</style>
