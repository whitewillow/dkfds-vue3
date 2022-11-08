<template>
  <slot
    :isValid="isValid"
    :errorMessage="errorMessage" />
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, provide, ref, watch,
} from 'vue';
import { validateAllErrorMessage } from '@/utils/validate-utils';

const isValid = ref(true);
const errorMessage = ref('');
const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: null,
  },
  validateFlow: {
    type: String,
    default: 'normal',
  },
  dirty: {
    type: Boolean,
    default: false,
  },
  validations: {
    type: Array as () => Array<(x?: unknown) => string | null>,
    default: () => [
      (input: unknown) => {
        if (!input) {
          return 'Indtast data';
        }
        return null;
      },
    ],
  },
});

/**
 * Provide for underliggende Inputs
 * Hhv om validering gik godt eller fejlbesked
 */
provide('validateIsValid', isValid);
provide('validateErrorMessage', errorMessage);

const emit = defineEmits(['valid']);

const hasValue = (): boolean => {
  if (typeof props.modelValue === 'string') {
    return props.modelValue.length > 0;
  }
  if (Array.isArray(props.modelValue)) {
    return false;
  }
  return false;
};

const isFormValid = () => {
  if (props.validations) {
    const vals = [...props.validations];

    const result: string | null = validateAllErrorMessage(...vals)(props.modelValue);
    isValid.value = true;

    if (result) {
      errorMessage.value = result;
      isValid.value = false;
    }
  }

  emit('valid', isValid.value);
};

watch(
  () => [props.modelValue, props.dirty],
  () => {
    isFormValid();
  },
  {
    immediate: props.validateFlow === 'immediate' || hasValue() || props.dirty,
    deep: true,
  },
);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>