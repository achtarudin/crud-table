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
        <tr scope="row"
          v-for="(customer,index) in custumers"
          :key="index">
          <td class="text-center">
            {{customer.id}}.{{index}}
          </td>
          <td class="text-center">
            {{capitalize(customer.name)}}
          </td>
          <td class="text-center">
            {{customer.numberPhone}}
          </td>
          <td class="text-center">
            <button type="button"
            class="btn btn-outline-primary btn-sm"
            @click="editCustomer"
            v-bind="customer">
            edit</button>
          </td>
          <td class="text-center">
            <button type="button"
            class="btn btn-outline-danger btn-sm"
            @click="deleteCustomer"
            :value="index">
            delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <modal
    :displayT="displayModal"
    :customer="customer"
    @closeModal="closeModal">
    </modal>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  components: {
    Modal
  },
  data() {
    return {
      displayModal: '',
      customer: {
        id: '',
        name: '',
        numberPhone: ''
      }
    }
  },
  computed: {
    custumers() {
      var getCustomers = this.$store.getters.getCustomers
      return getCustomers
    }
  },
  methods: {
    editCustomer(e) {
      var result = e.target.attributes
      this.customer.id = result.id.value
      this.customer.name = result.name.value
      this.customer.numberPhone = result.numberPhone.value
      this.displayModal = true
    },
    // method delete costumer mutation
    deleteCustomer(e) {
      var id = e.target.value
      this.$store.dispatch('deleteCustomer', id)
    },
    closeModal() {
      this.displayModal = false
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
