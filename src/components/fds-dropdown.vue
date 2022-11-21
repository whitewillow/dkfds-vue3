<template>
  <select
    class="form-select"
    :class="{ dirty: dirty }"
    :disabled="isDisabled"
    :name="formid"
    ref="refElement"
    :id="formid"
    v-bind="refValue"
    @change="onInput"
    @blur="onDirty">
    <slot />
  </select>
</template>

<script setup lang="ts">
import getFormId from '@/composable/formId';
import {
  defineProps, defineEmits, ref, onMounted,
} from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
  /**
   * Disable dropdown
   * */
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty', 'change']);

const refValue = ref(props.modelValue);
const refElement = ref(null);
const dirty = ref(false);
const { formid } = getFormId(props.id, true);

const onInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value);
const onDirty = () => {
  dirty.value = true;
  emit('dirty', true);
};

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (refElement.value as any).dispatchEvent(new Event('change'));
});
</script>

<style scoped lang="scss"></style>