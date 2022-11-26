<template>
  <section
    ref="refElement"
    class="validate-form-group">
    <slot
      :isValid="isValid"
      :errorMessage="errorMessage" />
  </section>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, onMounted, provide, ref, watch,
} from 'vue';
import { validateAllErrorMessage } from '@/utils/validate-utils';

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
  useAutoDirty: {
    type: Boolean,
    default: true,
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
const emit = defineEmits(['valid']);

const isValid = ref(true);
const errorMessage = ref('');
const refElement = ref(null);
const localDirty = ref(false);
/**
 * Provide for underliggende Inputs
 * Hhv om validering gik godt eller fejlbesked
 */
provide('provideIsValid', isValid);
provide('provideErrorMessage', errorMessage);

onMounted(() => {
  if (!refElement.value || !props.useAutoDirty) {
    return;
  }
  (refElement.value as HTMLElement).querySelector('input, select')?.addEventListener('blur', () => {
    localDirty.value = true;
  });
});

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
    errorMessage.value = '';

    if (result) {
      errorMessage.value = result;
      isValid.value = false;
    }
  }

  emit('valid', isValid.value);
};

watch(
  () => [props.modelValue, props.dirty, localDirty],
  () => {
    isFormValid();
  },
  {
    immediate: props.validateFlow === 'immediate' || hasValue() || props.dirty || localDirty.value,
    deep: true,
  },
);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>