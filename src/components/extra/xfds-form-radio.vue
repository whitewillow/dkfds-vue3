<template>
  <xfds-validate
    :modelValue="value"
    :validations="validations"
    #default="{ isValid, errorMessage }"
    :dirty="dirty"
    @valid="validEvent">
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
  </xfds-validate>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, PropType, ref, watch,
} from 'vue';
import xfdsFormGroupProps from '@/props/fds-form.props';
import fdsInputProps from '@/props/fds-input.props';
import { FdsOptionItem } from '@/model/fds.model';

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

<style scoped lang="scss"></style>