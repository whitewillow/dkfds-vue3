<template>
  <xfds-form-group
    v-bind="{
      label,
      hint,
      tooltip,
      isValid,
      errorMessage,
    }">
    <fds-input-number
      v-model="value"
      type="number"
      v-bind="{
        attrs,
        suffix,
        prefix,
      }"
      @update:modelValue="handleInput"
      @dirty="touchedEvent"/>
  </xfds-form-group>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, ref, useAttrs,
} from 'vue';

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
    default: 0,
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

const handleInput = () => emit('update:modelValue', value.value);
</script>

<style scoped lang="scss"></style>