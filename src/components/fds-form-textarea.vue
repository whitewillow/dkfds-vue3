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
      #default="{ formid }">
      <fds-fejlmeddelelse v-if="!isValid">
        {{ errorMessage }}
      </fds-fejlmeddelelse>
      <fds-hint>{{ hint }}</fds-hint>
      <fds-textarea
        v-model="value"
        :id="formid"
        :placeholder="placeholder"
        :max-length="maxLength"
        :inputClass="inputClass"
        :rowlength="rowlength"
        :rows="rows"
        :disabled="disabled"
        :readonly="readonly"
        @update:modelValue="handleInput"
        @dirty="touchedEvent"></fds-textarea>
    </fds-formgroup>
  </fds-validate>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';

import FdsHint from '@/components/fds-hint.vue';
import FdsTextarea from '@/components/fds-textarea.vue';
import FdsValidate from '@/components/fds-validate.vue';
import FdsFormgroup from '@/components/fds-formgroup.vue';
import fdsTextareaProps from '@/props/fds-texarea.props';
import FdsFejlmeddelelse from '@/components/fds-fejlmeddelelse.vue';

const props = defineProps({
  ...fdsTextareaProps,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>