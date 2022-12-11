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
import { defineProps, computed, PropType } from 'vue';

const props = defineProps({
  size: {
    type: String as PropType<'small' | 'large'>,
    default: 'large',
  },
  /**
   * Variant 'success' | 'info' | 'warning' | 'error'
   * */
  variant: {
    type: String as PropType<'success' | 'info' | 'warning' | 'error'>,
    default: null,
  },
});

const getSizeClass = computed(() => `badge-${props.size}`);
const getVariantClass = computed(() => (props.variant ? `badge-${props.variant}` : ''));
</script>

<style scoped lang="scss"></style>