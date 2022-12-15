<template>
  <a
    href="javascript:void(0);"
    class="function-link">
    <svg
      v-if="icon && icon.length > 0"
      class="icon-svg"
      focusable="false"
      aria-hidden="true">
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
});
</script>

<style scoped lang="scss"></style>
