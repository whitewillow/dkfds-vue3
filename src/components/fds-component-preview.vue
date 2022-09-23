<template>
  <div
    class="component-preview component-preview-details"
    :aria-label="header">
    <div class="component-link px-4 py-4">
      {{ header }}
    </div>
    <div
      class="component-example px-4 py-4"
      aria-label="Eksempel">
      <slot />
    </div>
    <div
      class="component-description px-4"
      v-if="$slots.description">
      <slot name="description" />
    </div>

    <div class="component-code px-4">
      <slot name="code" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted } from 'vue';

const props = defineProps({
  header: {
    type: String,
    default: null,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>