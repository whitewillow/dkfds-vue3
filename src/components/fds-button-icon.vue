<template>
  <button
    class="button"
    :class="[{ disabled: disabled }, `button-${variant}`]"
    @click="$emit('click')"
    :disabled="disabled">
    <svg class="icon-svg" focusable="false" aria-hidden="true" v-if="!right && icon">
      <use v-bind="{'xlink:href':`#${icon}`}" />
    </svg>
    <slot />
    <svg class="icon-svg rightside-icon" focusable="false" aria-hidden="true" v-if="right">
      <use v-bind="{'xlink:href':`#${icon}`}" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'secondary', // primary|secondary|
  },
  icon: {
    type: String,
    default: 'pencil',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>