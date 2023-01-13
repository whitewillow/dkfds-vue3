<template>
  <input
    :id="formid"
    v-model="refValue"
    type="date"
    class="form-input form-input-date"
    :name="formid"
    @input="onInput"
    @blur="$emit('dirty', true)"
  />
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { formId } from 'dkfds-vue3-utils';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String, // JSON Date
    default: '',
  },
});
const emit = defineEmits(['update:modelValue', 'dirty', 'valid']);
const { formid } = formId(props.id);
const refValue = ref(props.modelValue);

const isDateValid = (dateString: string) => {
  const date = Date.parse(dateString);
  return !Number.isNaN(date);
};

const onValid = () => emit('valid', isDateValid(refValue.value));

const onInput = () => {
  onValid();
  emit('update:modelValue', refValue.value);
};
</script>
