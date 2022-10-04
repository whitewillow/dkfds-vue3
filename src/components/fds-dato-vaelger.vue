<template>
  <input
    type="date"
    class="form-input form-input-date"
    @input="handleInput"
    @blur="$emit('dirty', true)"
    :id="formid"
    :name="formid"
    v-model="value"/>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

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
const formid = ref(props.id ?? uuidv4());
const value = ref(props.modelValue);

const isDateValid = (dateString: string) => {
  const date = Date.parse(dateString);
  return !Number.isNaN(date);
};

const handleValid = () => emit('valid', isDateValid(value.value));

const handleInput = () => {
  handleValid();
  emit('update:modelValue', value.value);
};
</script>