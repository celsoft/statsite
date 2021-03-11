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
              <form-loading-indicator v-if="loading"/>
              <div class="locale-changer">
                <locale-changer/>
              </div>
              <div class="text-center text-muted mb-4">
                <h3>{{ $t('form.auth.title', {appName: appName}) }}</h3>
                <small>{{ $t('form.auth.description') }}</small>
              </div>
              <base-alert type="danger" v-if="errors.length > 0">
                <div v-for="error in errors" :key="errors.indexOf(error)">{{ error }}</div>
              </base-alert>
              <form @submit.prevent="login">
                <base-input alternative
                            required
                            v-model="email"
                            class="mb-3"
                            :placeholder="$t('form.auth.input.placeholder.email')"
                            addon-left-icon="ni ni-email-83">
                </base-input>
                <base-input alternative
                            required
                            v-model="password"
                            type="password"
                            :placeholder="$t('form.auth.input.placeholder.password')"
                            addon-left-icon="ni ni-lock-circle-open">
                </base-input>
                <div class="text-center text-muted">
                  <small>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</small>
                </div>
                <div class="text-center">
                  <base-button nativeType="submit" type="primary" class="my-4 btn-auth">{{
                      $t('form.auth.button.login')
                    }}
                  </base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <router-link to="#" class="text-light">
                <small>{{ $t('form.auth.links.forgot') }}</small>
              </router-link>
            </div>
            <div class="col-6 text-right">
              <router-link to="#" class="text-light">
                <small>{{ $t('form.auth.links.register') }}</small>
              </router-link>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 text-center">
              <router-link to="/" class="text-light">
                <small>&larr; {{ $t('form.auth.links.backsite', {appName: appName}) }}</small>
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
import FormLoadingIndicator from "@/components/FormLoadingIndicator";

export default {
  name: 'LoginPage',
  components: {FormLoadingIndicator, LocaleChanger},
  data() {
    return {
      appName: this.appConfig.appName,
      email: '',
      password: '',
      loading: false,
      errors: [],
    }
  },
  beforeCreate() {
    if ( this.$store.getters.isLoggedIn ){
      this.$router.push('/')
    }
  },
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.errors = [];
      this.loading = true;
      this.$recaptchaLoaded().then(() => {
        this.$recaptcha('login').then((recaptchaToken) => {
          this.$store.dispatch('login', {email, password, recaptchaToken})
              .then(() => this.$router.push('/'))
              .catch(error => {
                this.loading = false;
                if (error.response.status === 422) {
                  error.response.data.forEach((error) => {
                    this.errors.push(error.message)
                  })
                } else {
                  this.errors.push('Something went wrong, please refresh the page and try again. Or contact us by contacts.');
                }
              })
        })
            .catch(() => {
              this.loading = false;
              this.errors.push('Something went wrong, please refresh the page and try again. Or contact us by contacts.');
            })
      })
          .catch(() => {
            this.loading = false;
            this.errors.push('Something went wrong, please refresh the page and try again. Or contact us by contacts.');
          })
    }
  },
  metaInfo() {
    return {
      title: this.$t('form.auth.title', {appName: this.appName})
    }
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

.section-auth {
  height: 100vh;
}

.btn-auth {
  margin-bottom: 0 !important;
}
</style>
