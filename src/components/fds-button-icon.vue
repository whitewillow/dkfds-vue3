<template>
  <button
    class="button"
    :class="`button-${variant}`">
    <svg
      class="icon-svg"
      focusable="false"
      aria-hidden="true"
      v-if="!right && icon">
      <use v-bind="{ 'xlink:href': `#${icon}` }" />
    </svg>
    <slot />
    <svg
      class="icon-svg rightside-icon"
      focusable="false"
      aria-hidden="true"
      v-if="right">
      <use v-bind="{ 'xlink:href': `#${icon}` }" />
    </svg>
  </button>
</template>

<script setup lang="ts">
/**
 *
 * Komponent for knap med icon
 * https://designsystem.dk/komponenter/knapper/
 *
 * */

import { FdsVariantEnum } from '@/model/fds.model';
import { defineProps, PropType } from 'vue';

defineProps({
  /**
   * Visnings variant
   * */
  variant: {
    type: String as PropType<FdsVariantEnum | string>,
    default: 'secondary',
  },
  /**
   * Ikon som string
   * */
  icon: {
    type: String,
    default: 'pencil',
  },
  /**
   * Højre stillet ikon
   * */
  right: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>