<template>
  <div
    class="component-code"
    aria-hidden="true">
    <legend v-if="header">
      {{ header }}
    </legend>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  header: {
    type: String,
    default: null,
  },
});
</script>