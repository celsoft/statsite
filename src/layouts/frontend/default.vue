<template>
  <div>
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from "@/layouts/frontend/AppFooter";
import AppHeader from "@/layouts/frontend/AppHeader";

export default {
  name: "defaultLayout",
  components: {AppHeader, AppFooter},
}
</script>