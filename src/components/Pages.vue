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
export default {
  data() {
    return costumers[
      ({
        id: 1,
        name: 'achtarudin',
        numberPhone: '33536'
      },
      {
        id: 2,
        name: 'handsome',
        numberPhone: '434345'
      },
      {
        id: 3,
        name: 'people',
        numberPhone: '343434'
      })
    ]
  },
  components: {
    AddEdit,
    Tables
  }
}
</script>

<style>
</style>
