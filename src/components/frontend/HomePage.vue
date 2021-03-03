<template>
  <div>
    <h1>Home page</h1>
    <base-button type="danger">Don't click me!</base-button>
    <div class="container ct-example-row">
      <div class="row">
        <div class="col-sm">
          <span>One of three columns</span>
        </div>
        <div class="col-sm">
          <span>One of three columns</span>
        </div>
        <div class="col-sm">
          <span>One of three columns</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Home page',
  },
}
</script>