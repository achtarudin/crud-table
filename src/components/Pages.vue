<template>
    <div>
      <add-edit></add-edit>
      <br>
        <tables></tables>
    </div>
</template>

<script>
import AddEdit from './AddEdit'
import Tables from './Table.vue'
import store from '../assets/store/store'

export default {
  components: {
    AddEdit,
    Tables
  },
  store: store
}
</script>

<style>
</style>
