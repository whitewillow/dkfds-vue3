<template>
  <xfds-form-group
    v-bind="{
      label,
      hint,
      tooltip,
      isValid,
      errorMessage,
    }">
    <fds-textarea
      v-model="value"
      :placeholder="placeholder"
      :max-length="maxLength"
      :inputClass="inputClass"
      :rowlength="rowlength"
      :rows="rows"
      :disabled="isDisabled"
      :readonly="isReadonly"
      @update:modelValue="handleInput"
      @dirty="touchedEvent"></fds-textarea>
  </xfds-form-group>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, ref, watch,
} from 'vue';

import fdsTextareaProps from '@/props/fds-texarea.props';
import xfdsFormGroupProps from '@/props/fds-form.props';

const props = defineProps({
  ...fdsTextareaProps,
  ...xfdsFormGroupProps,
});
const emit = defineEmits(['update:modelValue', 'dirty', 'valid', 'input']);

const value = ref(props.modelValue);
const dirty = ref(false);

const touchedEvent = () => {
  dirty.value = true;
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