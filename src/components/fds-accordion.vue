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
import accordionProps from '@/props/fds-accordion.props';
import { defineProps } from 'vue';

/**
 * Komponent til Accordions
 * https://designsystem.dk/komponenter/accordions/
 *
 * */

const props = defineProps({ ...accordionProps });
</script>