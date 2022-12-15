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
    <fds-input
      v-model="value"
      type="text"
      v-bind="{
        attrs,
        suffix,
        prefix,
      }"
      @update:model-value="handleInput"
      @dirty="touchedEvent"
    >
      <template
        v-if="$slots.button"
        #button>
        <slot name="button" />
      </template>
    </fds-input>
  </xfds-form-group>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, useAttrs, watch } from 'vue';

const attrs = useAttrs();

const props = defineProps({
  id: {
    type: String,
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
  isValid: {
    type: Boolean,
    default: true,
  },
  errorMessage: {
    type: String,
    default: null,
  },
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
  emit('dirty', true);
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
