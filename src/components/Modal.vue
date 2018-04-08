<template>
<div>
  <!-- Transitions Vue js -->
  <transition name="fade">
    <div class="modal fade"
    :class="{show: displayT}"
    v-if="displayT">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Edit Customer
            </h5>
          </div>
          <div class="modal-body">
            <div class="form-row">
              <div class="col-md-6 col-xs-12">
                <input type="text"
                class="form-control"
                v-model="customer.name">
              </div>
              <div class="col-xs-12 d-block d-md-none">
                <br>
              </div>
              <div class="col-md-6 col-xs-12">
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
  </transition>

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
      this.$swal({
        position: 'top-end',
        type: 'success',
        title: 'Your customer has been changes',
        showConfirmButton: false,
        timer: 1500
      })
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
