<template>
  <section
    ref="refElement"
    class="validate-form-group"
    :id="validateId">
    <slot
      :isValid="isValid"
      :isValidWaitForDirty="isValidWaitForDirty"
      :errorMessage="errorMessage"/>
  </section>
</template>

<script setup lang="ts">
import {
  computed, defineEmits, defineProps, onMounted, PropType, provide, ref, watch,
} from 'vue';
import { validateAllErrorMessage } from '@/utils/validate-utils';
import { ValidatorItem } from '@/service/validator.service';
import getComputedId from '@/composable/getComputedId';

const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: null,
  },
  id: {
    type: String,
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
const emit = defineEmits(['valid', 'validated']);

const isValid = ref(false);
const isValidWaitForDirty = ref(true);
const errorMessage = ref('');
const errorMessages = ref<Array<string>>([]);
const refElement = ref(null);
const localDirty = ref(false);

const validateId = getComputedId(props.id);
/**
 * Provide for underliggende Inputs
 * Hhv om validering gik godt eller fejlbesked
 */
provide('provideIsValid', isValidWaitForDirty);
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

const updateCollection = () => {
  const currentItem = {
    key: validateId.value,
    type: '',
    valid: isValid.value,
    reasons: errorMessages.value,
    dirty: localDirty.value,
  } as ValidatorItem;

  emit('validated', currentItem);
};

const touched = computed(() => localDirty.value || props.dirty);

const isFormValid = () => {
  isValid.value = true;
  isValidWaitForDirty.value = true;
  errorMessage.value = '';
  errorMessages.value = [];
  if (props.validations) {
    const vals = [...props.validations];
    const result: string[] = validateAllErrorMessage(...vals)(props.modelValue);

    if (result.length > 0) {
      [errorMessage.value] = result;
      errorMessages.value = result;
      isValid.value = false;
      if (touched.value) {
        isValidWaitForDirty.value = false;
      }
    }
  }
  updateCollection();

  emit('valid', isValid.value);
};

watch(
  () => props.modelValue,
  () => {
    isFormValid();
  },
  {
    immediate: true,
    deep: true,
  },
);
watch(
  () => localDirty,
  () => {
    isFormValid();
  },
  {
    deep: true,
  },
);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>