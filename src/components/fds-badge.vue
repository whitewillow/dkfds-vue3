<template>
  <span
    class="badge"
    :class="`${sizeClass} ${variantClass}`">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  small: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: null,
  },
});
const sizeClass = computed(() => (props.small ? 'badge-small' : 'badge-large'));
const variantClass = computed(() => (props.variant ? `badge-${props.variant}` : ''));
</script>

<style scoped lang="scss"></style>