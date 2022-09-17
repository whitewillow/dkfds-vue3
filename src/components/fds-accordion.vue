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
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  header: {
    type: String,
  },
  hint: {
    type: String,
    default: '',
  },
  contentClass: {
    type: String,
    default: '',
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
  showFooter: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: null,
  },
  variantText: {
    type: String,
    default: 'Fejl',
  },
});

const collapse = ref(props.collapsed);
const variantClass = computed(() => (props.variant ? `accordion-${props.variant}` : ''));
</script>

<style scoped lang="scss"></style>