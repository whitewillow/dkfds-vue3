<template>
  <input
    type="date"
    class="form-input form-input-date"
    @input="onInput"
    @blur="$emit('dirty', true)"
    :id="formid"
    :name="formid"
    v-model="refValue"/>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import getFormId from '@/composable/formId';

const props = defineProps({
  id: {
    type: String,
  },
  modelValue: {
    type: String, // JSON Date
    default: '',
  },
});
const emit = defineEmits(['update:modelValue', 'dirty', 'valid']);
const { formid } = getFormId(props.id);
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