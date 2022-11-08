<template>
  <fds-formgroup :is-valid="isValid">
    <slot name="label">
      <fds-label v-if="label">
        {{ label }}
      </fds-label>
    </slot>
    <slot name="tooltip">
      <fds-tooltip
        v-if="tooltip"
        class="ml-2">
        {{ tooltip }}
      </fds-tooltip>
    </slot>

    <slot name="fejlmeddelelse">
      <fds-fejlmeddelelse v-if="!isValid">
        {{ errorMessage }}
      </fds-fejlmeddelelse>
    </slot>
    <slot name="hint">
      <fds-hint>{{ hint }}</fds-hint>
    </slot>
    <slot />
  </fds-formgroup>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import xfdsFormGroupProps from '@/props/fds-form.props';

defineProps({
  ...xfdsFormGroupProps,
});
</script>