<template>
  <select
    class="form-select"
    :disabled="isDisabled"
    :name="id"
    :id="id"
    v-bind="refValue"
    @change="onInput"
    @blur="$emit('dirty', true)">
    <option
      :value="refValue"
      v-if="!optionHeader">
      {{ optionHeader }}
    </option>
    <option
      v-for="(o, i) in options"
      :value="o.value"
      :key="i"
      :disabled="o.disabled"
      :selected="o.value === refValue">
      {{ o.title }}
    </option>
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
  /**
   * Første option - default: Vælg
   * */
  optionHeader: {
    type: String,
    default: 'Vælg',
  },
  /**
   * Disable dropdown
   * */
  isDisabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Dropdown options / valgmuligheder
   * */
  options: {
    type: Array as () => Array<FdsOptionItem>,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty', 'change']);

const refValue = ref(props.modelValue);

const onInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value);
</script>

<style scoped lang="scss"></style>