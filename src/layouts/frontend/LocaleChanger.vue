<template>
  <div class="langPosition">
    <button
        href="#"
        class="flex items-center langDropdownButton"
        @click="toggleVisibility"
        @keydown.space.exact.prevent="toggleVisibility"
        @keydown.esc.exact="hideDropdown"
        @keydown.shift.tab="hideDropdown"
        @keydown.up.exact.prevent="startArrowKeys"
        @keydown.down.exact.prevent="startArrowKeys"
    >
      <img :src="require(`@/assets/static/images/icons/languages/flag_${$i18n.locale}.svg`)" alt="flag"
           class="flagShadow"/>
    </button>
    <transition name="dropdown-fade">
      <ul
          v-if="isVisible"
          ref="dropdown"
          @clickaway="hideDropdown"
          class="langBox"
      >
        <lang-li v-for="(lang, idx) in langs" :key="idx" :visible="lang.shortName !== $i18n.locale">
          <a
              href="#"
              class="flex langHover"
              @click.prevent="setLocale(lang.shortName)"
              @keydown.up.exact.prevent
              @keydown.tab.exact="focusNext(false)"
              @keydown.down.exact.prevent="focusNext(true)"
              @keydown.esc.exact="hideDropdown"
          >
            <img :src="require(`@/assets/static/images/icons/languages/flag_${lang.shortName}.svg`)"
                 :alt="lang.longName" class="flag"/>
            <span class="localLang">{{ lang.localName }}</span>
          </a>
        </lang-li>
      </ul>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import supportedLocales from "@/config/supported-locales";

Vue.component('lang-li', {
  props: ['visible'],
  template: '<li v-if="visible"><slot/></li>'
})

export default {
  name: "LanguageSwitcher",
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
      langs: supportedLocales.languages
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      if (this.isVisible) {
        this.$refs.dropdown.children[0].children[0].focus();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;
      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus();
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("lang", locale);
      this.hideDropdown();
    }
  }
};
</script>

<style lang="scss" scoped>
.langPosition {
  position: relative;
}
// Box that holds all language options
.langBox {
  user-select: none;
  padding: 5px 5px 5px -5px;
  width: max-content;
}

// Language name text
.localLang {
  margin-top: 3px;
  font-size: 18px;
  padding-left: 15px;
  font-weight: 400;
  vertical-align: middle;
}

// Animations
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}

.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.langDropdownButton {
  outline: none;
  cursor: pointer !important;
  background: transparent !important;
  border: none;
  padding: 0;
}

.shortName {
  margin-top: 5px !important;
}

ul {
  float: left;
  text-align: left;
  min-width: 138px;
  border-radius: 8px;
  background: white;
  z-index: 500;
  position: absolute;
  list-style: none;
  padding: 10px 10px !important;
  margin-top: 5px;
  top: 100%;
  right: 0;

  li {
    padding: 5px 0;
  }
}

.flag {
  width: 30px;
}

.flagShadow {
  width: 35px;
}

.langHover {
  margin: 10px;
  text-decoration: none;
  color: #222;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #007aff;
  }
}
</style>