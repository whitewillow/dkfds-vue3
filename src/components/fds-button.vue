<template>
  <button
    class="button"
    :class="`button-${variant}`"
    :disabled="isDisabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
/**
 *
 * Komponent for knap
 * https://designsystem.dk/komponenter/knapper/
 *
 * */
import { defineProps, PropType } from 'vue';
import { FdsVariantEnum } from '@/model/fds.model';

defineProps({
  /**
   * Visnings variant
   * */
  variant: {
    type: String as PropType<FdsVariantEnum | string>,
    default: () => FdsVariantEnum.primary,
  },
  /**
   * Marker knap som disabled
   * */
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>