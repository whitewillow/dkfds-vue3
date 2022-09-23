<template>
  <slot
    :isValid="isValid"
    :errorMessage="errorMessage" />
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, nextTick, PropType, ref, watch,
} from 'vue';
// eslint-disable-next-line import/no-cycle
import { validateAllErrorMessage } from '@/utils/validate-utils';
import { FdsCheckboxItem } from '@/model/fds.model';

const isValid = ref(true);
const errorMessage = ref('');
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
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
      (input: Array<unknown>) => {
        if (!input || input.length === 0) {
          return 'Ingen valgt';
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
  async () => {
    isFormValid();
  },
  {
    immediate: props.validateFlow === 'immediate',
    deep: true,
  },
);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>