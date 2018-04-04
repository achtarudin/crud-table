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
        <div class="col-md-8 offset-md-10 col-sm-4 offset-sm-9">
          <button type="submit"
          class="btn btn-success btn-sm"
          @click="addCustomers">Add
          </button>
          <button type="reset" disabled
          class="btn btn-dark btn-sm">
          reset
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
      newId: '',
      name: '',
      numberPhone: ''
    }
  },
  methods: {
    addCustomers() {
      this.name = this.name.trim()
      this.numberPhone = this.numberPhone.trim()
      if (this.name) {
        if (this.numberPhone) {
          var patt = new RegExp(/^\d*$/)
          if (patt.test(this.numberPhone)) {
            this.$emit('addCustomer', this)
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

<style>
</style>
