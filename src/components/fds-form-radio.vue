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
      <fds-radio
        :id="formid"
        :list="options"
        v-model="value"
        @update:modelValue="handleInput"
        @dirty="touchedEvent">
        <slot />
      </fds-radio>
    </fds-formgroup>
  </fds-validate>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, PropType, ref,
} from 'vue';
import fdsFormProps from '@/props/fds-form.props';
import fdsInputProps from '@/props/fds-input.props';
import { FdsRadioItem } from '@/model/fds.model';

const props = defineProps({
  ...fdsInputProps,
  ...fdsFormProps,
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<FdsRadioItem[]>,
    default: () => [],
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