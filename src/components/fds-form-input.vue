<template>
  <fds-validate
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
      <fds-input
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
        @dirty="touchedEvent"></fds-input>
    </fds-formgroup>
  </fds-validate>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, ref, watch,
} from 'vue';

import FdsHint from '@/components/fds-hint.vue';
import FdsInput from '@/components/fds-input.vue';
import FdsValidate from '@/components/fds-validate.vue';
import FdsFormgroup from '@/components/fds-formgroup.vue';
import fdsInputProps from '@/props/fds-input.props';
import FdsFejlmeddelelse from '@/components/fds-fejlmeddelelse.vue';
import fdsFormProps from '@/props/fds-form.props';

const props = defineProps({
  ...fdsInputProps,
  ...fdsFormProps,
  modelValue: {
    type: String,
    default: '',
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