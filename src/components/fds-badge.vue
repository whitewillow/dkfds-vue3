<template>
  <span
    class="badge"
    :class="`${sizeClass} ${variantClass}`">
    <slot />
  </span>
</template>

<script setup lang="ts">
/**
 *
 * Komponent til Badge
 * https://designsystem.dk/komponenter/badges/
 *
 * */
import { defineProps, computed } from 'vue';

const props = defineProps({
  /**
   * Som lille badge
   * */
  small: {
    type: Boolean,
    default: false,
  },
  /**
   * Variant 'success' | 'info' | 'warning' | 'error'
   * */
  variant: {
    type: String as () => 'success' | 'info' | 'warning' | 'error',
    default: null,
  },
});
const sizeClass = computed(() => (props.small ? 'badge-small' : 'badge-large'));
const variantClass = computed(() => (props.variant ? `badge-${props.variant}` : ''));
</script>

<style scoped lang="scss"></style>