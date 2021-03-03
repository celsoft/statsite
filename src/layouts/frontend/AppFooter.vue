<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ year }} Maxim Martynov
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a href="#" class="nav-link">Link</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Link</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Link</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
