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
        <tr scope="row" v-for="customer in customer" :key="customer.id">
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
            @click="deleteCustomer">
            delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <modal :list="listCostumer"
    @saveCustomer="saveCustomer"></modal>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  data() {
    return {
      listCostumer: {
        id: '',
        name: '',
        numberPhone: ''
      }
    }
  },
  components: {
    Modal
  },
  props: ['customer'],
  methods: {
    editCustomer: function(e) {
      console.log(e)

      var id = e.target.value - 1
      this.listCostumer.id = id
      this.listCostumer.name = this.customer[id].name
      this.listCostumer.numberPhone = this.customer[id].numberPhone
    },
    saveCustomer(valueUsers) {
      this.$emit('saveCustomer', valueUsers)
    },
    // method delete costumer mutation
    deleteCustomer: function(e) {},
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
