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
      :readonly="readonly"
      :name="id"
      v-model="value"
      :id="id"
      :placeholder="placeholder"
      :type="inputType"
      :disabled="disabled"
      @input="handleInput"
      @blur="$emit('dirty', true)"
      @focus="($event.target as any).select()"/>
    <div
      v-if="suffix"
      class="form-input-suffix"
      aria-hidden="true">
      {{ suffix }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, ref, computed,
} from 'vue';
import fdsInputProps from '@/props/fds-input.props';

const props = defineProps({
  ...fdsInputProps,
  modelValue: {
    default: 0,
  },
  inputType: {
    type: String,
    default: 'number',
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

const value = ref(Number.isNaN(props.modelValue) ? 0 : props.modelValue);

const cssClass = computed((): string => {
  if (props.suffix) {
    return 'form-input-wrapper form-input-wrapper--suffix';
  }
  if (props.prefix) {
    return 'form-input-wrapper form-input-wrapper--prefix';
  }
  return 'flex-items-center';
});

const handleInput = () => emit('update:modelValue', value.value);
</script>

<style scoped lang="scss"></style>