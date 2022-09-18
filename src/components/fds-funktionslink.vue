<template>
  <a
    v-if="!to"
    href="javascript:void(0);"
    class="function-link"
    :class="[{ disabled: disabled }, { asLink: linkStyle }]">
    <svg
      class="icon-svg"
      focusable="false"
      aria-hidden="true"
      v-if="icon && icon.length > 0">
      <use :xlink:href="'#' + icon"></use>
    </svg>
    <slot />
  </a>
  <router-link
    v-else
    :to="to"
    class="function-link"
    title="Rediger"
    :class="[{ disabled: disabled }, { asLink: linkStyle }]"
    :disabled="disabled">
    <svg
      class="icon-svg"
      focusable="false"
      aria-hidden="true"
      v-if="icon && icon.length > 0">
      <use :xlink:href="'#' + icon"></use>
    </svg>
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouteLocation, RouteLocationRaw } from 'vue-router';

const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  to: {
    type: Object as () => RouteLocationRaw | null,
    default: null,
  },
  linkStyle: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>