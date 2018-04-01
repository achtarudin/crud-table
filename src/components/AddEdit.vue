<template>
  <div class="card">
    <div class="card-body border border-primary">
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Name" v-model="name">
        </div>
        <div class="col">
          <input type="text" class="form-control"
          placeholder="Last name" v-model="numberPhone">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-8 offset-md-10 col-sm-4 offset-sm-9">
          <button type="submit"
          class="btn btn-success btn-sm"
          @click="addCustomers">Add
          </button>
          <button type="reset"
          class="btn btn-dark btn-sm"
          @click="testSwal">reset
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
    addCustomers: function() {
      var getCustomers = this.$store.getters.getCountCostumers
      this.newId = getCustomers + 1
      this.$store.dispatch('addCustomers', this)
      this.name = ''
      this.numberPhone = ''
      this.newId = ''
    },
    testSwal: function() {
      // this.$swal('Testing', 'Sweet-Alert-Berhasil', 'OK')
      this.$swal('Any fool can use a computer')
    }
  }
}
</script>

<style>
</style>
