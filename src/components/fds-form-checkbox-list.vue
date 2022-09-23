<template>
  <fds-validate-array
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
      <fds-checkbox-list
        v-model="value"
        @dirty="touchedEvent"
        @update:modelValue="handleInput"
        :id="formid">
        <slot />
      </fds-checkbox-list>
    </fds-formgroup>
  </fds-validate-array>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, ref, watch,
} from 'vue';

import fdsCheckboxProps from '@/props/fds-checkbox.props';
import { FdsCheckboxItem } from '@/model/fds.model';

const props = defineProps({
  ...fdsCheckboxProps,
  validations: {
    type: Array as () => Array<(x?: unknown) => string | null>,
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

const handleInput = (event: Array<FdsCheckboxItem>) => {
  value.value = event;
  emit('update:modelValue', value.value);
};
</script>

<style scoped lang="scss"></style>