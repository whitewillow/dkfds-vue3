<template>
  <xfds-form-group
    v-bind="{
      label,
      hint,
      tooltip,
      isValid,
      errorMessage,
    }">
    <fds-radio
      :list="options"
      v-model="value"
      @update:modelValue="handleInput"
      @dirty="touchedEvent">
      <slot />
    </fds-radio>
  </xfds-form-group>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, PropType, ref, watch,
} from 'vue';
import { FdsOptionItem } from '@/model/fds.model';
import fdsInputProps from '@/props/fds-input.props';
import xfdsFormGroupProps from '@/props/fds-form.props';

const props = defineProps({
  ...fdsInputProps,
  ...xfdsFormGroupProps,
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<FdsOptionItem[]>,
    default: () => [],
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

<style scoped lang="scss"></style>