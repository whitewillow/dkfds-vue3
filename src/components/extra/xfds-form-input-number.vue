<template>
  <xfds-validate
    :modelValue="value"
    :validations="validations"
    #default="{ isValid, errorMessage }"
    :dirty="dirty"
    @valid="validEvent">
    <fds-formgroup
      :is-valid="isValid"
      :label="label"
      :tooltip="tooltip"
      #default="{ formid }">
      <fds-fejlmeddelelse v-if="!isValid">
        {{ errorMessage }}
      </fds-fejlmeddelelse>
      <fds-hint>{{ hint }}</fds-hint>
      <fds-input-number
        v-model="value"
        :id="formid"
        v-bind="{
          placeholder,
          autocomplete,
          inputType,
          inputClass,
          disabled,
          readonly,
          suffix,
          prefix,
        }"
        @update:modelValue="handleInput"
        @dirty="touchedEvent"/>
    </fds-formgroup>
  </xfds-validate>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';

import fdsInputProps from '@/props/fds-input.props';
import fdsFormProps from '@/props/fds-form.props';

const props = defineProps({
  ...fdsInputProps,
  ...fdsFormProps,
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

const validEvent = (isValid: boolean) => {
  emit('valid', isValid);
};

const handleInput = () => emit('update:modelValue', value.value);
</script>

<style scoped lang="scss"></style>