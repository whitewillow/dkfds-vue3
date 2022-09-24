<template>
  <xfds-validate
    :modelValue="value"
    :validations="validations"
    #default="{ isValid, errorMessage }"
    :dirty="dirty"
    @valid="validEvent">
    <xfds-formgroup
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
    </xfds-formgroup>
  </xfds-validate>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, ref, watch,
} from 'vue';

import fdsTextareaProps from '@/props/fds-texarea.props';
import fdsFormProps from '@/props/fds-form.props';

const props = defineProps({
  ...fdsTextareaProps,
  ...fdsFormProps,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>