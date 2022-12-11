<template>
  <div
    class="component-preview component-preview-details mb-4"
    :aria-label="header">
    <div class="component-link">
      {{ header }}

      <a
        :href="href"
        target="designsystem"
        v-if="href">
        {{ linkText }}
      </a>
    </div>
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
  href: {
    type: String,
    default: null,
  },
  linkText: {
    type: String,
    default: 'Design System',
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>