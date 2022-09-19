<template>
  <ul class="accordion">
    <fds-accordion-item v-bind="props">
      <template
        #header
        v-if="$slots.header">
        <slot name="header" />
      </template>
      <slot />
    </fds-accordion-item>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  header: {
    type: String,
  },
  hint: {
    type: String,
    default: '',
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: null,
  },
  variantText: {
    type: String,
    default: 'Fejl',
  },
});
</script>