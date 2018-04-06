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

        <!-- variable customers is computed property -->
        <tr scope="row"
          v-for="(customer,index) in custumers"
          :key="index">
          <td class="text-center">
            {{customer.id}}.{{index}}
          </td>
          <td class="text-center">

            <!-- make method capitalize for capital first of word -->
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
/**
 * @description
 * Import component from Modal.vue and
 * setup as component in TableCustomers.vue
 */
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
    /**
     * @function
     * customers set as computed
     *
     * @description
     * take function from getters.getCustomers
     *
     * @returns
     * type Object
     */
    custumers() {
      var getCustomers = this.$store.getters.getCustomers
      return getCustomers
    }
  },
  methods: {
    /**
     * @description
     * @method editCustomer
     * setup as data intance
     * @see data()
     */
    editCustomer(e) {
      var result = e.target.attributes
      this.customer.id = result.id.value
      this.customer.name = result.name.value
      this.customer.numberPhone = result.numberPhone.value
      this.displayModal = true
    },

    /**
     * @description
     * @method deleteCustomer()
     * for delete customer with
     * @augments id from index customer
     */
    deleteCustomer(e) {
      var id = e.target.value

      /**
       * @function  this.store.dispatch()
       * call function deleteCustomer in actions.js file
       */
      this.$store.dispatch('deleteCustomer', id)
    },

    /**
     * @description
     * @method closeModal() for close modal bootstrap,
     * who setup to @see data() object
     */
    closeModal() {
      this.displayModal = false
    },

    /**
     * @description
     * @method capitalize() for leter of first word become capital
     */
    capitalize(name) {
      var capitalize = name.replace(/\b\w/g, l => l.toUpperCase())
      return capitalize
    }
  }
}
</script>

<style>
</style>
