<template>
  <div
    v-if="showError"
    class="form-error-message">
    <slot>
      {{ compErrorMessage }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, useSlots } from 'vue';

const props = defineProps({
  auto: {
    type: Boolean,
    default: true,
  },
});

const slots = useSlots();

const injErrorMessage = ref<string | null>(inject('provideErrorMessage', null));
const injIsValid = ref<boolean>(inject('provideIsValid', true));
const compErrorMessage = computed(() => {
  if (!props.auto) {
    return null;
  }
  return !injIsValid.value ? injErrorMessage.value : null;
});
const showError = computed(() => {
  return slots.default || compErrorMessage;
});
</script>

<style scoped lang="scss"></style>
