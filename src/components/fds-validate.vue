<template>
  <div><slot :isValid="isValid" :errorMessage="errorMessage" /></div>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, ref, watch,
} from 'vue';
import { validateAllErrorMessage } from '@/utils/validate-utils';

const isValid = ref(true);
const errorMessage = ref('');
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
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
    type: Array as () => Array<(input: string) => string | null>,
    default: () => [
      (input: string) => {
        if (!input || input.trim().length === 0) {
          return 'Indtast data';
        }
        return null;
      },
    ],
  },
});

const emit = defineEmits(['valid']);

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
    immediate: props.validateFlow === 'immediate' || props.modelValue.length > 0 || props.dirty,
  },
);
</script>
d

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>