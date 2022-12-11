<template>
  <div
    class="spinner"
    v-bind="attrs"></div>
  <div
    class="spinner-status"
    role="status"
    v-if="$slots.default">
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