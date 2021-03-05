<template>
  <section class="section section-shaped my-0 section-auth">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card type="secondary" shadow header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5" class="border-0">
            <template>
              <div class="locale-changer">
                <locale-changer />
              </div>
              <div class="text-center text-muted mb-4">
                <h3>Log in to {{appName}}</h3>
                <small>Enter your email and password</small>
              </div>
              <p>{{ $t('message') }}</p>
              <form role="form">
                <base-input alternative
                            required
                            class="mb-3"
                            placeholder="Email"
                            addon-left-icon="ni ni-email-83">
                </base-input>
                <base-input alternative
                            required
                            type="password"
                            placeholder="Password"
                            addon-left-icon="ni ni-lock-circle-open">
                </base-input>
                <div class="text-center">
                  <base-button type="primary" class="my-4 btn-auth">Sign In</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light">
                <small>Create new account</small>
              </a>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <router-link to="/" class="text-light">
                <small>&larr; Go to {{appName}}</small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import LocaleChanger from "@/layouts/frontend/LocaleChanger";
export default {
  name: 'LoginPage',
  components: {LocaleChanger},
  data() {
    return {
      appName: this.$appName
    }
  },
  metaInfo: {
    title: 'Login page',
  }
}
</script>
<style>
.locale-changer {
  position: absolute !important;
  top: 15px !important;
  right: 15px !important;
  left: unset !important;
}
.section-auth { height: 100vh; }
.btn-auth { margin-bottom: 0 !important; }
</style>
