<template>
  <button
    class="button"
    :class="[{ disabled: disabled }, `button-${variant}`]"
    :disabled="disabled">
    <svg
      class="icon-svg"
      focusable="false"
      aria-hidden="true"
      v-if="!asRightAlignedIcon && icon">
      <use v-bind="{ 'xlink:href': `#${icon}` }" />
    </svg>
    <slot />
    <svg
      class="icon-svg rightside-icon"
      focusable="false"
      aria-hidden="true"
      v-if="asRightAlignedIcon">
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
   * disabled
   * */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Højre stillet ikon
   * */
  asRightAlignedIcon: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>