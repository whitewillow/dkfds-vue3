<template>
  <button
    class="button"
    :class="`button-${variant}`">
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
import { FdsVariantEnum } from 'dkfds-vue3-utils';

defineProps({
  /**
   * Visnings variant
   * */
  variant: {
    type: String as PropType<FdsVariantEnum | string>,
    default: () => FdsVariantEnum.primary,
  },
});
</script>

<style scoped lang="scss"></style>
