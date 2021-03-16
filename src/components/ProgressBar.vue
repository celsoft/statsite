<template>
  <div>
    <loading :active.sync="isLoading"
             :can-cancel="false"
             :color="color"
             :width="width"
             :height="height"
             :opacity="opacity"
             :is-full-page="fullPage"></loading>
  </div>
</template>

<script>
import $eventHub from '../components/eventHub'
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'ProgressBar',
  components: { Loading },
  data: () => ({
    isLoading: false,
    fullPage: true,
    color: '#5E72E4',
    width: 100,
    height: 100,
    opacity: 0.8
  }),
  mounted() {
    $eventHub.$on('asyncComponentLoading', this.start)
    $eventHub.$on('asyncComponentLoaded', this.stop)
  },
  methods: {
    start() {
      this.isLoading = true
    },
    stop() {
      this.isLoading = false
    },
  },
}
</script>