<template>
  <span
    class="badge"
    :class="`${getSizeClass} ${getVariantClass}`">
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
  isSmall: {
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
const getSizeClass = computed(() => (props.isSmall ? 'badge-small' : 'badge-large'));
const getVariantClass = computed(() => (props.variant ? `badge-${props.variant}` : ''));
</script>

<style scoped lang="scss"></style>