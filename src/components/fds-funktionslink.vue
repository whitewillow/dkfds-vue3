<template>
  <a
    href="javascript:void(0);"
    class="function-link"
    :class="[{ disabled: disabled }]">
    <svg
      class="icon-svg"
      focusable="false"
      aria-hidden="true"
      v-if="icon && icon.length > 0">
      <use :xlink:href="'#' + icon"></use>
    </svg>
    <slot />
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  icon: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>