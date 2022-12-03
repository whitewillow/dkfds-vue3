<template>
  <fds-alert
    class="top-space"
    role="alert"
    aria-atomic="true"
    variant="error"
    showIcon
    :closeable="false">
    <slot
      name="header"
      v-if="$slots.header || header">
      <p class="alert-heading">
        {{ header }}
      </p>
    </slot>
    <slot />
  </fds-alert>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import FdsAlert from '@/components/fds-alert.vue';

defineProps({
  header: {
    type: String,
    default: 'Fejlopsummering',
  },
});
</script>

<style scoped lang="scss"></style>