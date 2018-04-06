<template>
  <div class="container">
    <br>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <pages></pages>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @description
 * Import component from Pages.vue and
 * setup as component in App.vue
 */
import Pages from './components/Pages.vue'
export default {
  components: {
    Pages
  }
}
/**
 * @end description
 */
</script>

<style>
</style>
