<template>
  <div>
    <div id="myModal"
    class="modal"
    :class="{hide:list.display}">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some Texts</p>
      </div>
    </div>
    <fieldset :class="{hide:list.display}">
      <div class="card card-body input-group">
        <div class="form-row align-items-center">
          <div class="col-auto">
            <input type="text" class="form-control"
            v-model="list.name">
          </div>
          <div class="col-auto">
            <input type="text" class="form-control"
            v-model="list.numberPhone">
          </div>
          <button class="btn"
          @click="saveCustomer"
          v-bind="list">Save</button>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    saveCustomer(e) {
      var values = e.target.attributes
      console.log('test value ' + values.id.value)
      var valueUsers = {
        id: values.id.value,
        name: values.name.value,
        numberPhone: values.numberphone.value
      }
      this.$emit('saveCustomer', valueUsers)
    }
  }
}
</script>

<style scoped>
.hide {
  display: none;
}
fieldset {
  z-index: 1;
  transition: opacity 0.5s;
}
</style>
