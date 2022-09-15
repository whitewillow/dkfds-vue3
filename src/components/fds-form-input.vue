<template>
  <fds-validate
    :modelValue="value"
    :validations="validations"
    #default="{ isValid, errorMessage }"
    :dirty="dirty"
    @valid="validEvent">
    <fds-formgroup class="mt-4" :is-valid="isValid" #default="{ formid }">
      <fds-label :id="formid">{{ label }}</fds-label>
      <fds-error-message v-if="!isValid">{{ errorMessage }}</fds-error-message>
      <fds-hint>{{ hint }}</fds-hint>
      <fds-input
        v-model="value"
        :id="formid"
        :placeholder="placeholder"
        :inputType="inputType"
        :inputClass="inputClass"
        :disabled="disabled"
        :readonly="readonly"
        @update:modelValue="handleInput"
        @dirty="touchedEvent"></fds-input>
    </fds-formgroup>
  </fds-validate>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';

import FdsHint from '@/components/fds-hint.vue';
import FdsInput from '@/components/fds-input.vue';
import FdsLabel from '@/components/fds-label.vue';
import FdsValidate from '@/components/fds-validate.vue';
import FdsFormgroup from '@/components/fds-formgroup.vue';
import FdsErrorMessage from '@/components/fds-error-message.vue';
import fdsInputProps from '@/props/fds-input.props';

const props = defineProps({
  ...fdsInputProps,
  validations: {
    type: Array as () => Array<(input: string) => string | null>,
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

<style scoped lang="scss">
</style>