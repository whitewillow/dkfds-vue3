<template>
  <xfds-form-group
    v-bind="{
      label,
      hint,
      tooltip,
      isValid,
      errorMessage,
    }">
    <fds-input-number
      v-model="value"
      v-bind="{
        placeholder,
        autocomplete,
        inputType,
        inputClass,
        disabled,
        isReadonly,
        suffix,
        prefix,
      }"
      @update:modelValue="handleInput"
      @dirty="touchedEvent"/>
  </xfds-form-group>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';

import fdsInputProps from '@/props/fds-input.props';
import xfdsFormGroupProps from '@/props/fds-form.props';

const props = defineProps({
  ...fdsInputProps,
  ...xfdsFormGroupProps,
  modelValue: {
    default: 0,
  },
  inputType: {
    type: String,
    default: 'number',
  },
  suffix: {
    type: String,
    default: null,
  },
  prefix: {
    type: String,
    default: null,
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