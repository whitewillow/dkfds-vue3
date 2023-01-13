<template>
  <details class="details">
    <summary class="details-summary">
      <slot name="header">
        {{ header }}
      </slot>
    </summary>
    <div class="details-text">
      <slot />
    </div>
  </details>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  /**
   * Overskrift
   * */
  header: {
    type: String,
    default: 'Mere information',
  },
});
</script>
