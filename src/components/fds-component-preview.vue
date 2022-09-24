<template>
  <div
    class="component-preview component-preview-details mb-4"
    :aria-label="header">
    <div class="component-link">
      {{ header }}
    </div>
    <div
      class="component-example"
      aria-label="Eksempel">
      <slot />
    </div>
    <div
      class="component-description"
      v-if="$slots.description">
      <slot name="description" />
    </div>

    <div class="component-code">
      <slot name="code" />
    </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>