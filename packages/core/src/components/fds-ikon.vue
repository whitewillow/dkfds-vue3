<template>
  <svg
    class="icon-svg"
    focusable="false"
    aria-hidden="true">
    <use v-bind="{ 'xlink:href': `#${icon}` }" />
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  /**
   * Ikon som string
   * */
  icon: {
    type: String,
    default: 'home',
  },
});
</script>
