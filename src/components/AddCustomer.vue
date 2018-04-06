<template>
  <div class="card">
    <div class="card-body border border-primary">
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Name" v-model="name">
        </div>
        <div class="col">
          <input type="text" class="form-control"
          placeholder="Number phone" v-model="numberPhone">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col">
          <button type="submit"
          class="btn btn-success btn-sm"
          @click="addCustomers">Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      numberPhone: '',
      newId: ''
    }
  },
  methods: {
    /**
     * @description
     * @method addCustomer() for add new customer
     */
    addCustomers() {
      this.name = this.name.trim()
      this.numberPhone = this.numberPhone.trim()
      if (this.name) {
        if (this.numberPhone) {
          /** @description
           * Set Regexp for validasi from input
           * @type must number
           */
          var patt = new RegExp(/^\d*$/)

          if (patt.test(this.numberPhone)) {
            var getCustomers = this.$store.getters.getCountCostumers
            this.newId = getCustomers + 1

            /**
             * @method this.$store.dispatch()
             * for comunnication to actions.js file
             * with @argument (1. name function in actions.js file, 2. data)
             */
            this.$store.dispatch('addCustomers', this)

            this.name = ''
            this.numberPhone = ''
            this.newId = ''
          } else {
            this.$swal('Format number phone must number')
          }
        } else {
          this.$swal('Please insert number phone')
        }
      } else {
        this.$swal('Please insert your name')
      }
    }
  }
}
</script>

<style scoped>
.row .col button {
  float: right;
}
</style>
