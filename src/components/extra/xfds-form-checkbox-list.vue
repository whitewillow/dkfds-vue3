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
      <fds-checkbox-list
        v-model="value"
        @dirty="touchedEvent"
        @update:modelValue="handleInput"
        :id="formid">
        <slot />
      </fds-checkbox-list>
    </fds-formgroup>
  </xfds-validate>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, ref, watch,
} from 'vue';

import fdsCheckboxProps from '@/props/fds-checkbox.props';
import { FdsCheckboxItem } from '@/model/fds.model';
import fdsFormProps from '@/props/fds-form.props';

const props = defineProps({
  ...fdsCheckboxProps,
  ...fdsFormProps,
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

watch(
  () => [props.modelValue],
  () => {
    value.value = props.modelValue;
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss"></style>