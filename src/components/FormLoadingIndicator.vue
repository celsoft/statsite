<template>
  <loading :active.sync="isLoading"
           :can-cancel="false"
           :color="color"
           :width="width"
           :height="height"
           :opacity="opacity"
           :is-full-page="fullPage"></loading>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: 'FormLoadingIndicator',
  data() {
    return {
      isLoading: true,
      fullPage: false,
      color: '#5E72E4',
      width: 100,
      height: 100,
      opacity: 0.8
    }
  },
  components: {Loading},
}
</script>
<style>
.vld-overlay { outline: 0 !important; }
</style>