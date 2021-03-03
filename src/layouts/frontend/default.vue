<template>
  <div>
    <router-view/>
    <app-footer/>
    <p>asd</p>
  </div>
</template>

<script>
import AppFooter from "@/layouts/frontend/AppFooter";

export default {
  name: "defaultLayout",
  components: {AppFooter},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>