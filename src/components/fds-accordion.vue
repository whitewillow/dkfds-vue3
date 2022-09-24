<template>
  <ul class="accordion">
    <fds-accordion-item v-bind="props">
      <template
        #header
        v-if="$slots.header">
        <slot name="header" />
      </template>
      <slot />
    </fds-accordion-item>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
/**
 * Komponent til Accordions
 * https://designsystem.dk/komponenter/accordions/
 *
 * */

const props = defineProps({
  /**
   * Overskrift
   * */
  header: {
    type: String,
  },
  /**
   * Hjælpetekst
   * */
  hint: {
    type: String,
    default: '',
  },
  /**
   * Er Accordion lukket
   * */
  collapsed: {
    type: Boolean,
    default: true,
  },
  /**
   * Disabled
   * */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Type - ikon der vises til højre
   * */
  variant: {
    type: String as () => string | 'success' | 'warning' | 'error',
    default: null,
  },
  /**
   * Tilhørende tekst til varianten (typen)
   * */
  variantText: {
    type: String,
    default: 'Fejl',
  },
});
</script>