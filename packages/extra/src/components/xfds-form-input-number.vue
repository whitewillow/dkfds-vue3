<template>
  <xfds-form-group
    v-bind="{
      label,
      hint,
      tooltip,
      isValid,
      errorMessage,
    }"
  >
    <fds-input-number
      v-model="value"
      :suffix="suffix"
      :prefix="prefix"
      :readonly="readonly"
      :input-class="inputClass"
      @update:model-value="handleInput"
      @dirty="touchedEvent"
    />
  </xfds-form-group>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';
import { FdsInputNumber } from 'dkfds-vue3-core';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
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
  readonly: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  suffix: {
    type: String,
    default: null,
  },
  prefix: {
    type: String,
    default: null,
  },
  inputClass: {
    type: String,
    default: undefined,
  },
});
const emit = defineEmits(['update:modelValue', 'dirty', 'valid', 'input']);

const value = ref(props.modelValue);
const dirty = ref(false);

const touchedEvent = () => {
  dirty.value = true;
};

const handleInput = () => emit('update:modelValue', value.value);
</script>

<style scoped lang="scss"></style>
