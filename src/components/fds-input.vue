<template>
  <div :class="`${cssClass}`">
    <div
      v-if="prefix"
      class="form-input-prefix"
      aria-hidden="true">
      {{ prefix }}
    </div>
    <input
      class="form-input d-flex"
      :class="inputClass"
      :readonly="isReadonly"
      :name="formid"
      v-model="value"
      :id="formid"
      :placeholder="placeholder"
      :type="inputType"
      :autocomplete="autocomplete"
      :disabled="isDisabled"
      @input="handleInput"
      @blur="$emit('dirty', true)"/>
    <div
      v-if="suffix"
      class="form-input-suffix"
      aria-hidden="true">
      {{ suffix }}
    </div>
    <slot name="button" />
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, ref, computed, useSlots, watch,
} from 'vue';
import fdsInputProps from '@/props/fds-input.props';
import getFormId from '@/composable/formId';

const props = defineProps({
  ...fdsInputProps,
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

const emit = defineEmits(['update:modelValue', 'dirty', 'input']);
const slots = useSlots();

const { formid } = getFormId(props.id, true);
const value = ref(props.modelValue);

const cssClass = computed((): string => {
  if (props.suffix) {
    return 'form-input-wrapper form-input-wrapper--suffix';
  }
  if (props.prefix) {
    return 'form-input-wrapper form-input-wrapper--prefix';
  }
  if (slots.button) {
    return 'search';
  }
  return 'flex-items-center';
});

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