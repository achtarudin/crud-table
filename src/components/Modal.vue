<template>
<div>
  <div class="modal fade"
  :class="{show: displayT}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Edit Customer
          </h5>
        </div>
        <div class="modal-body">
          <div class="form-row">
            <div class="col-md-6 col-sm-12">
              <input type="text"
              class="form-control"
              v-model="customer.name">
            </div>
             <div class="col-md-6 col-sm-12">
              <input type="text"
              class="form-control"
              v-model="customer.numberPhone">
            </div>
           </div>
        </div>
        <div class="modal-footer">
          <button type="button"
            class="btn btn-secondary btn-sm"
            @click="closeModal">Close
          </button>
          <button type="button"
            class="btn btn-primary btn-sm"
            @click="editCustomer"
            v-bind="customer">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  /**
   * @description
   * Property props is @type array
   * for make v-bind in TableCustomer.vue
   */
  props: ['displayT', 'customer'],
  methods: {
    /**
     * @description
     * @method closeModal()
     * for close modal Bootstrap
     */
    closeModal() {
      this.$emit('closeModal')
    },
    editCustomer(e) {
      var result = e.target.attributes
      var editCustomer = {
        id: result.id.value,
        name: result.name.value,
        numberPhone: result.numberPhone.value
      }
      /**
       * @method this.$store.dispatch()
       * for comunnication to actions.js file
       * with @argument (1. name function in actions.js file, 2. data)
       */
      this.$store.dispatch('editCustomer', editCustomer)

      this.$emit('closeModal')
    }
  }
}
</script>
<style scoped>
.show {
  display: block;
}
.fade {
  transition: opacity 0.15s linear;
}
.modal.fade {
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
}
</style>
