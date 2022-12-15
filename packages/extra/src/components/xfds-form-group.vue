<template>
  <fds-formgroup :is-valid="compValid">
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
      <fds-fejlmeddelelse v-if="!compValid">
        {{ compErrorMessage }}
      </fds-fejlmeddelelse>
    </slot>
    <slot name="hint">
      <fds-hint>{{ hint }}</fds-hint>
    </slot>
    <slot />
  </fds-formgroup>
</template>

<script setup lang="ts">
import { computed, defineProps, inject, ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
  tooltip: {
    type: String,
    default: null,
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  errorMessage: {
    type: String,
    default: null,
  },
});

const injIsValid = ref<boolean | null>(inject('provideIsValid', null));
const injErrorMessage = ref<string | null>(inject('provideErrorMessage', null));

const compValid = computed(() => injIsValid.value ?? props.isValid);
const compErrorMessage = computed(() => injErrorMessage.value ?? props.errorMessage);
</script>
