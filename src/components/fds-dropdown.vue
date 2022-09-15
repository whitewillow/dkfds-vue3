<template>
  <select
    class="form-select"
    :class="inputClass"
    :disabled="disabled"
    :name="id"
    :id="id"
    v-bind="value"
    @change="handleInput"
    @blur="handleInput"
    @focus="$emit('dirty')">
    <option value v-if="!noHeader">{{ optionHeader }}</option>
    <option v-for="(o, i) in options" :value="o.value" :key="i" :selected="o.value === value">{{
      o.title
    }}</option>
  </select>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { FdsOptionItem } from '@/model/fds.model';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
  optionHeader: {
    type: String,
    default: 'Vælg',
  },
  noHeader: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as () => Array<FdsOptionItem>,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty', 'change']);

const value = ref(props.modelValue);

const handleInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value);
</script>

<style scoped lang="scss"></style>