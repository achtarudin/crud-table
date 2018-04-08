<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h3 class="text-center">
          Crud table with vuejs
        </h3>
        <pages></pages>
      </div>
    </div>
    <div class="footer">
      <hr>
      <a href="https://github.com/achtarudin/crud-table">
      code
      </a>
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
