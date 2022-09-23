<template>
  <slot
    :isValid="isValid"
    :errorMessage="errorMessage" />
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, ref, watch, computed, PropType,
} from 'vue';
import { validateAllErrorMessage } from '@/utils/validate-utils';

const isValid = ref(true);
const errorMessage = ref('');
const props = defineProps({
  modelValue: {
    default: 0,
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
    default: () => [() => null],
  },
});

const emit = defineEmits(['valid']);

const val = ref(Number.isNaN(props.modelValue) ? 0 : props.modelValue);

const isFormValid = () => {
  if (props.validations) {
    const vals = [...props.validations];

    const result: string | null = validateAllErrorMessage(...vals)(val.value);
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
    val.value = Number.isNaN(props.modelValue) ? 0 : props.modelValue;
    isFormValid();
  },
  {
    immediate: props.validateFlow === 'immediate',
  },
);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>