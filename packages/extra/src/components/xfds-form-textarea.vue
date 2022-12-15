<template>
  <xfds-form-group
    v-bind="{
      label,
      hint,
      tooltip,
      isValid,
      errorMessage,
    }"
  >
    <fds-textarea
      v-model="value"
      v-bind="attrs"
      :maxlength="maxlength"
      :rowlength="rowlength"
      :rows="rows"
      @update:model-value="handleInput"
      @dirty="touchedEvent"
    ></fds-textarea>
  </xfds-form-group>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, useAttrs, watch } from 'vue';

const attrs = useAttrs();

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true,
  },
  id: {
    type: String,
    default: null,
  },
  rows: {
    type: Number,
    default: 5,
  },
  rowlength: {
    type: Number,
    default: 80,
  },
  maxlength: {
    type: Number,
    default: 4000,
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
  isValid: {
    type: Boolean,
    default: true,
  },
  errorMessage: {
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
