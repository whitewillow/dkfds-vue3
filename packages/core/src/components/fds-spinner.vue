<template>
  <div
    class="spinner"
    v-bind="attrs"></div>
  <div
    v-if="$slots.default"
    class="spinner-status"
    role="status">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, useAttrs } from 'vue';

const attrs = useAttrs();
defineProps({
  variant: {
    type: String,
    default: null,
  },
});
</script>

<style scoped lang="scss"></style>
