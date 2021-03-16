<template>
  <div id="app">
    <progress-bar/>
    <vue-extend-layouts/>
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'
import ProgressBar from './components/ProgressBar.vue'
export default {
  name: 'App',
  components: { VueExtendLayouts, ProgressBar }
}
</script>