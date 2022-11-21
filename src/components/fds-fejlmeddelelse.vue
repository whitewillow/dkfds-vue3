<template>
  <div
    class="form-error-message"
    v-if="showError">
    <slot>
      {{ compErrorMessage }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import {
  computed, inject, ref, useSlots,
} from 'vue';

const slots = useSlots();

const injErrorMessage = ref<string | null>(inject('provideErrorMessage', null));
const compErrorMessage = computed(() => injErrorMessage.value);
const showError = computed(() => {
  return slots.default || compErrorMessage;
});
</script>

<style scoped lang="scss"></style>